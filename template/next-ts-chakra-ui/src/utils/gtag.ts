export const pageview = (url: string) => {
  if (
    typeof window.gtag === 'function' &&
    process.env.NEXT_PUBLIC_GA_TRACKING_ID
  ) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type Event = {
  action: string;
  category?: string;
  label?: string;
  value?: string;
};
export const event = ({ action, category, label, value }: Event) => {
  if (
    typeof window.gtag === 'function' &&
    process.env.NEXT_PUBLIC_GA_TRACKING_ID
  ) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
