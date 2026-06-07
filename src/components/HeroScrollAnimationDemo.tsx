import React, { useEffect, useRef } from 'react';
import Component from './ui/hero-scroll-animation';
import { trackDemoShowcaseViewed } from '../lib/pendoTracking';

function DemoOne() {
  const enteredAt = useRef(Date.now());

  useEffect(() => {
    trackDemoShowcaseViewed({
      demo_name: 'scroll_animation',
      referral_source: document.referrer || 'direct',
    });

    return () => {
      const timeSpent = Math.round((Date.now() - enteredAt.current) / 1000);
      trackDemoShowcaseViewed({
        demo_name: 'scroll_animation',
        time_spent_seconds: timeSpent,
      });
    };
  }, []);

  return (
    <Component />
  );
}

export { DemoOne };
