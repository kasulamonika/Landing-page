import { useEffect, useRef } from 'react';
import DigitalSerenity from './ui/digital-serenity-animated-landing-page';
import { trackDemoShowcaseViewed } from '../lib/pendoTracking';

const DigitalSerenityDemo = () => {
  const enteredAt = useRef(Date.now());

  useEffect(() => {
    trackDemoShowcaseViewed({
      demo_name: 'digital_serenity',
      referral_source: document.referrer || 'direct',
    });

    return () => {
      const timeSpent = Math.round((Date.now() - enteredAt.current) / 1000);
      trackDemoShowcaseViewed({
        demo_name: 'digital_serenity',
        time_spent_seconds: timeSpent,
      });
    };
  }, []);

  return <DigitalSerenity />;
};

export { DigitalSerenityDemo };
