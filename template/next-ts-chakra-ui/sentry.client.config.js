// This file configures the initialization of Sentry on the browser.
// The config you add here will be used whenever a page is visited.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || '';
const SENTRY_ENVIRONMENT = process.env.SENTRY_ENVIRONMENT || '';

Sentry.init({
  dsn: SENTRY_DSN,
  enabled: SENTRY_ENVIRONMENT !== '',
  tracesSampleRate: 0.01,
});
