/* eslint-disable no-param-reassign */
const withPlugins = require('next-compose-plugins');
const { withSentryConfig } = require('@sentry/nextjs');
const bundleAnalyzerPlugin = require('@next/bundle-analyzer');

const ANALYZE = process.env.ANALYZE || '';
const SENTRY_ENVIRONMENT = process.env.SENTRY_ENVIRONMENT || '';

module.exports = withPlugins(
  [bundleAnalyzerPlugin({ enabled: ANALYZE === 'true' })],
  // Use `withSentryConfig` directly as it's not compatible with `next-compose-plugins`
  // https://github.com/getsentry/sentry-javascript/issues/3579#issuecomment-856325385
  withSentryConfig(
    {
      webpack5: true,
      swcMinify: true,
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
    },
    { dryRun: SENTRY_ENVIRONMENT === '' }
  )
);
