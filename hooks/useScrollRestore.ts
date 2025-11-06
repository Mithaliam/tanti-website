"use client";

import { useEffect } from "react";

/**
 * Saves the current scroll position to sessionStorage
 */
export function rememberScroll(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem('cards_scroll_y', String(window.scrollY));
  } catch (e) {
    // Ignore storage errors
  }
}

/**
 * Hook that restores scroll position on mount
 * @param sectionId - Optional section ID to scroll into view if no saved position exists
 */
export function useScrollRestore(sectionId?: string): void {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const attemptRestore = () => {
      try {
        // Check for saved scroll position
        const savedY = sessionStorage.getItem('cards_scroll_y');
        
        if (savedY !== null) {
          // Restore saved scroll position
          const y = parseInt(savedY, 10) || 0;
          
          // If we have a valid saved Y position, use it
          if (y > 0) {
            window.scrollTo({ top: y, behavior: 'smooth' });
            // Remove saved value after restoring
            sessionStorage.removeItem('cards_scroll_y');
          } else {
            // Fallback to scrolling to section if Y is 0 or invalid
            const element = document.getElementById(sectionId || 'cards-section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              sessionStorage.removeItem('cards_scroll_y');
            }
          }
        } else if (sectionId) {
          // If no saved position and sectionId provided, scroll to section
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } catch (e) {
        // Ignore storage/scroll errors
      }
    };
    
    // Initial attempt - wait for DOM to be ready
    requestAnimationFrame(() => {
      attemptRestore();
    });
    
    // Also try after delays to handle lazy-loaded content
    const timeoutId1 = setTimeout(() => {
      attemptRestore();
    }, 100);
    
    const timeoutId2 = setTimeout(() => {
      attemptRestore();
    }, 300);
    
    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, [sectionId]);
}

/**
 * Hook to ensure page starts at top when navigated to
 * Use this on destination pages (solar, residential, commercial, etc.)
 */
export function useScrollToTop(): void {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Also ensure after any potential layout shifts
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }, []);
}

