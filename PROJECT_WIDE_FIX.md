# Project-Wide Fix Analysis

## Issues Found

### 1. **Framer Motion Hydration Issues** (280+ instances)
- All pages use `initial="hidden"` with `whileInView="visible"`
- This causes hydration mismatch: server renders hidden, client animates to visible
- **Fix:** Change `initial="hidden"` to `initial="visible"` OR use mounted state pattern

### 2. **Browser API Access** (4 files)
- `app/solar/page.tsx` - `window.scrollTo` in useEffect (OK)
- `app/solutions/page.tsx` - Check for window access
- `app/layout.tsx` - Already fixed with guards

### 3. **Viewport Prop Usage** (280+ instances)
- All use `viewport={{ once: true }}` WITH `whileInView` - This is CORRECT
- No issues here

## Root Cause

The main issue is `initial="hidden"` causing hydration mismatches:
- Server: Renders element in "hidden" state (opacity: 0, y: 20, etc.)
- Client: Immediately animates to "visible" state
- Result: Hydration error

## Universal Fix Strategy

1. **Option A:** Change all `initial="hidden"` to `initial="visible"` (loses animation on first render)
2. **Option B:** Use mounted state pattern (keeps animation, prevents hydration error)
3. **Option C:** Remove Framer Motion entirely (safest, no animations)

## Recommended Fix

Use **Option B** - Mounted State Pattern:
- Add `isMounted` state
- Set `initial="visible"` for SSR safety
- Enable animations after mount

