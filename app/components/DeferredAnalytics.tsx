'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function DeferredAnalytics() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer loading of analytics/speed insights scripts out of the critical rendering path
    // to avoid blocking initial render and delaying LCP.
    if (typeof window !== 'undefined') {
      const schedule = (typeof requestIdleCallback === 'function')
        ? requestIdleCallback
        : (cb: () => void) => setTimeout(cb, 200);

      const cancel = (typeof cancelIdleCallback === 'function')
        ? cancelIdleCallback
        : clearTimeout;

      const id = schedule(() => setMounted(true));

      return () => {
        cancel(id as any);
      };
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
}
