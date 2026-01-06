"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Storage key prefix for scroll positions
 */
const STORAGE_PREFIX = "scroll:";

/**
 * Debounce delay for writing to sessionStorage (ms)
 */
const DEBOUNCE_DELAY = 150;

/**
 * Get storage key for a route (pathname + search)
 */
function getStorageKey(pathname: string, search: string): string {
  return `${STORAGE_PREFIX}${pathname}${search}`;
}

/**
 * Save scroll position to sessionStorage (debounced)
 */
function saveScrollPosition(key: string, y: number): void {
  if (typeof window === "undefined" || typeof sessionStorage === "undefined") return;
  
  try {
    sessionStorage.setItem(key, String(y));
  } catch (e) {
    // Ignore storage errors (quota exceeded, etc.)
  }
}

/**
 * Get saved scroll position from sessionStorage
 */
function getSavedScrollPosition(key: string): number | null {
  if (typeof window === "undefined" || typeof sessionStorage === "undefined") return null;
  
  try {
    const saved = sessionStorage.getItem(key);
    return saved !== null ? parseInt(saved, 10) : null;
  } catch (e) {
    return null;
  }
}

/**
 * Scroll to a hash anchor element
 * @returns true if element was found and scrolled to, false otherwise
 */
function scrollToHash(hash: string): boolean {
  if (typeof window === "undefined" || !hash) return false;
  
  try {
    const id = hash.slice(1);
    if (!id) return false;
    
    const element = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    }
  } catch (e) {
    // Ignore errors
  }
  
  return false;
}

/**
 * Options for useScrollRestoration hook
 */
export interface UseScrollRestorationOptions {
  /**
   * Disable scroll restoration (e.g., when modal/overlay is active)
   */
  disabled?: boolean;
  
  /**
   * Debounce delay in ms (default: 150)
   */
  debounceDelay?: number;
}

/**
 * Hook for reliable scroll restoration
 * 
 * Testing notes:
 * - Navigate: /, scroll mid-page → click a link to /posts/1 → press Back → should return to exact Y
 * - Same for query changes: /search?q=a → /search?q=b → Back
 * - With #anchor: /docs#intro should jump to #intro even if a different saved Y exists
 */
export function useScrollRestoration(options: UseScrollRestorationOptions = {}): void {
  const { disabled = false } = options;
  
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastPathRef = useRef<string>("");
  const isRestoringRef = useRef(false);
  const isPopStateRef = useRef(false);
  const navigationHistoryRef = useRef<string[]>([]);
  
  // Get current route key
  const getCurrentRouteKey = useCallback(() => {
    const search = searchParams?.toString() || "";
    return getStorageKey(pathname || "", search ? `?${search}` : "");
  }, [pathname, searchParams]);
  
  // Debounced save function
  const debouncedSave = useCallback((key: string, y: number) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    
    debounceTimerRef.current = setTimeout(() => {
      saveScrollPosition(key, y);
      debounceTimerRef.current = null;
    }, options.debounceDelay ?? DEBOUNCE_DELAY);
  }, [options.debounceDelay]);
  
  // Save scroll position
  const saveScroll = useCallback(() => {
    if (disabled || isRestoringRef.current || typeof window === "undefined") return;
    
    const currentKey = getCurrentRouteKey();
    const y = window.scrollY || window.pageYOffset || 0;
    
    if (y > 0) {
      debouncedSave(currentKey, y);
    }
  }, [disabled, debouncedSave, getCurrentRouteKey]);
  
  // Restore scroll position
  const restoreScroll = useCallback((isPopState: boolean = false, routeKey?: string) => {
    if (disabled || typeof window === "undefined") return;
    
    const currentKey = routeKey || getCurrentRouteKey();
    const hash = window.location.hash;
    
    // If URL has a hash, try to scroll to it first
    if (hash) {
      requestAnimationFrame(() => {
        if (scrollToHash(hash)) {
          return;
        }
        
        // Hash element not found, fall back to saved position
        const savedY = getSavedScrollPosition(currentKey);
        if (savedY !== null && savedY >= 0 && isPopState) {
          isRestoringRef.current = true;
          window.scrollTo({ top: savedY, behavior: "auto" });
          
          requestAnimationFrame(() => {
            window.scrollTo({ top: savedY, behavior: "auto" });
            isRestoringRef.current = false;
          });
        }
      });
      return;
    }
    
    // No hash, restore saved position
    const savedY = getSavedScrollPosition(currentKey);
    
    if (savedY !== null && savedY >= 0 && isPopState) {
      // Only restore on popstate (back/forward navigation)
      isRestoringRef.current = true;
      
      // Immediate restore
      window.scrollTo({ top: savedY, behavior: "auto" });
      
      // Second restore after layout shifts
      requestAnimationFrame(() => {
        window.scrollTo({ top: savedY, behavior: "auto" });
        
        // Third restore after a short delay to handle dynamic content
        setTimeout(() => {
          window.scrollTo({ top: savedY, behavior: "auto" });
          isRestoringRef.current = false;
        }, 100);
      });
    } else if (!isPopState) {
      // For normal forward navigation, start at top
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [disabled, getCurrentRouteKey]);
  
  // Main effect: Handle route changes and set up listeners
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    // Set manual scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    
    const currentKey = getCurrentRouteKey();
    const prevKey = lastPathRef.current;
    
    // Check if this is a back/forward navigation
    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const navType = nav?.type;
    const isPopState = navType === "back_forward" || isPopStateRef.current;
    isPopStateRef.current = false;
    
    // Detect if this is back navigation by checking navigation history
    const navHistory = navigationHistoryRef.current;
    const isBackNav = navHistory.length > 1 && navHistory[navHistory.length - 2] === currentKey;
    
    // If path changed, save previous position
    if (prevKey && prevKey !== currentKey) {
      const prevY = window.scrollY || window.pageYOffset || 0;
      if (prevY > 0) {
        saveScrollPosition(prevKey, prevY);
      }
      
      // Update navigation history
      if (!isBackNav && !isPopState) {
        // Forward navigation - add to history
        navHistory.push(currentKey);
        // Keep only last 50 entries
        if (navHistory.length > 50) {
          navHistory.shift();
        }
      } else if (isBackNav || isPopState) {
        // Back navigation - remove last entry
        if (navHistory.length > 0) {
          navHistory.pop();
        }
      }
    } else if (!prevKey) {
      // Initial load - add to history
      navHistory.push(currentKey);
    }
    
    // Update last path
    lastPathRef.current = currentKey;
    
    // Restore scroll position
    if (isPopState || isBackNav) {
      // Back/forward navigation - restore saved position
      // Use multiple delays to ensure DOM is ready
      requestAnimationFrame(() => {
        setTimeout(() => {
          restoreScroll(true);
        }, 0);
      });
    } else {
      // Normal forward navigation - start at top
      requestAnimationFrame(() => {
        restoreScroll(false);
      });
    }
    
    // Save scroll position on scroll (throttled)
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          saveScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Save on navigation start
    const onBeforeUnload = () => {
      saveScroll();
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = null;
      }
    };
    
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        saveScroll();
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
          debounceTimerRef.current = null;
        }
      }
    };
    
    // Handle popstate (back/forward navigation)
    const onPopState = () => {
      isPopStateRef.current = true;
      // Use window.location directly as Next.js router might not have updated yet
      const newPath = window.location.pathname;
      const newSearch = window.location.search;
      const newKey = getStorageKey(newPath, newSearch);
      
      if (newKey !== lastPathRef.current) {
        // Save current position before navigation
        const currentY = window.scrollY || window.pageYOffset || 0;
        if (currentY > 0 && lastPathRef.current) {
          saveScrollPosition(lastPathRef.current, currentY);
        }
        
        lastPathRef.current = newKey;
        
        // Restore for new route after a short delay to ensure DOM is ready
        setTimeout(() => {
          restoreScroll(true, newKey);
        }, 50);
      }
    };
    
    // Handle pushState/replaceState (Next.js router navigation)
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    
    history.pushState = function (...args) {
      // Save current position before navigation
      saveScroll();
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = null;
      }
      
      originalPushState.apply(history, args);
    };
    
    history.replaceState = function (...args) {
      originalReplaceState.apply(history, args);
    };
    
    // Add event listeners
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("beforeunload", onBeforeUnload);
    window.addEventListener("pagehide", onBeforeUnload);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("popstate", onPopState);
    
    // Cleanup
    return () => {
      saveScroll();
      
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = null;
      }
      
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("beforeunload", onBeforeUnload);
      window.removeEventListener("pagehide", onBeforeUnload);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("popstate", onPopState);
    };
  }, [pathname, searchParams, disabled, saveScroll, restoreScroll, getCurrentRouteKey]);
}
