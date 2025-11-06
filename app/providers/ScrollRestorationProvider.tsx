"use client";

import { useScrollRestoration, UseScrollRestorationOptions } from "@/lib/useScrollRestoration";

/**
 * Provider component for scroll restoration in App Router
 * 
 * This component should be included in the root layout to enable
 * scroll restoration across all pages in the app.
 * 
 * @example
 * ```tsx
 * // app/layout.tsx
 * import ScrollRestorationProvider from "@/app/providers/ScrollRestorationProvider";
 * 
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         <ScrollRestorationProvider>
 *           {children}
 *         </ScrollRestorationProvider>
 *       </body>
 *     </html>
 *   );
 * }
 * ```
 */
export default function ScrollRestorationProvider({
  children,
  disabled = false,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  useScrollRestoration({ disabled });
  
  return <>{children}</>;
}

