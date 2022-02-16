/* eslint-disable no-param-reassign */
const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');
const bundleAnalyzerPlugin = require('@next/bundle-analyzer');

const ANALYZE = process.env.ANALYZE || '';
const SENTRY_ENVIRONMENT = process.env.SENTRY_ENVIRONMENT || '';

module.exports = withPlugins(
  [
    withSentryConfig({}, { dryRun: SENTRY_ENVIRONMENT === '' }),
    bundleAnalyzerPlugin({ enabled: ANALYZE === 'true' }),
  ],
  {
    webpack5: true,
    poweredByHeader: false,
    reactStrictMode: true,
    webpack: (config) => {
      // Insert our custom polyfill file in to the beginning of the main entry point
      // https://github.com/vercel/next.js/issues/13231#issuecomment-711484680
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        const main = entries['main.js'];
        if (main && !main.includes('./src/polyfills.ts')) {
          main.unshift('./src/polyfills.ts');
        }

        return entries;
      };

      return config;
    },
  }
);
