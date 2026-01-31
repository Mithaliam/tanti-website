/**
 * Pages Router example for scroll restoration
 * 
 * If you're using Pages Router (pages/ directory), add this to your pages/_app.tsx:
 * 
 * @example
 * ```tsx
 * import type { AppProps } from "next/app";
 * import { useScrollRestoration } from "@/lib/useScrollRestoration";
 * 
 * export default function App({ Component, pageProps }: AppProps) {
 *   // Enable scroll restoration
 *   useScrollRestoration();
 * 
 *   return <Component {...pageProps} />;
 * }
 * ```
 * 
 * Or if you need to disable it conditionally:
 * 
 * @example
 * ```tsx
 * import type { AppProps } from "next/app";
 * import { useScrollRestoration } from "@/lib/useScrollRestoration";
 * import { useState } from "react";
 * 
 * export default function App({ Component, pageProps }: AppProps) {
 *   const [isModalOpen, setIsModalOpen] = useState(false);
 * 
 *   // Disable scroll restoration when modal is open
 *   useScrollRestoration({ disabled: isModalOpen });
 * 
 *   return <Component {...pageProps} />;
 * }
 * ```
 */

// This is a documentation file, not a module
export {};

