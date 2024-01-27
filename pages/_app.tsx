import "../styles.css";
import "nextra-theme-docs/style.css";
import "../custom.css";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

// Shim requestIdleCallback in Safari
if (typeof window !== "undefined" && !("requestIdleCallback" in window)) {
  window.requestIdleCallback = (fn) => setTimeout(fn, 1);
  window.cancelIdleCallback = (e) => clearTimeout(e);
}

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SSRProvider>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </SSRProvider>
  );
}
