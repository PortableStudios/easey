/* eslint-disable no-param-reassign */
const { withSentryConfig } = require('@sentry/nextjs/config');
const bundleAnalyzerPlugin = require('@next/bundle-analyzer');

const ANALYZE = process.env.ANALYZE || '';

const withBundleAnalyzer = bundleAnalyzerPlugin({
  enabled: ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

// Source maps are only uploaded to Sentry when `SENTRY_AUTH_TOKEN` is set
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
module.exports = withSentryConfig(withBundleAnalyzer(nextConfig), {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: !process.env.CI,
  telemetry: false,
});
