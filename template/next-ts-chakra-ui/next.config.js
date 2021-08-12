/* eslint-disable no-param-reassign */
require('dotenv').config();
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const withPlugins = require('next-compose-plugins');
const sourceMapsPlugin = require('@zeit/next-source-maps');
const bundleAnalyzerPlugin = require('@next/bundle-analyzer');

module.exports = withPlugins(
  [
    sourceMapsPlugin(),
    bundleAnalyzerPlugin({ enabled: process.env.ANALYZE === 'true' }),
  ],
  {
    webpack5: true,
    poweredByHeader: false,
    reactStrictMode: true,
    env: {
      SITE_URL: process.env.SITE_URL,
      SENTRY_DSN: process.env.SENTRY_DSN,
      SENTRY_ENVIRONMENT: process.env.SENTRY_ENVIRONMENT,
      GA_TRACKING_ID: process.env.GA_TRACKING_ID,
    },
    // Code from https://github.com/zeit/next.js/tree/master/examples/with-sentry-simple
    webpack: (config, options) => {
      // Replace @sentry/node with @sentry/browser when building browser bundle
      if (!options.isServer) {
        config.resolve.alias['@sentry/node'] = '@sentry/browser';
      }

      // Automatically upload source maps to Sentry
      if (
        process.env.SENTRY_ENVIRONMENT &&
        process.env.SENTRY_ENVIRONMENT !== 'localhost'
      ) {
        config.plugins.push(
          new SentryWebpackPlugin({
            include: '.next',
            ignore: ['node_modules'],
            urlPrefix: '~/_next',
          })
        );
      }

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
