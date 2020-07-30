/* eslint-disable no-param-reassign */
require('dotenv').config();
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const sourceMaps = require('@zeit/next-source-maps')();
const transpileModules = require('next-transpile-modules')(['react-spring']);
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        // https://github.com/cyrilwanner/next-optimized-images/issues/114#issuecomment-634940408
        imagesFolder: 'chunks/images',
      },
    ],
    bundleAnalyzer,
    sourceMaps,
    transpileModules,
  ],
  {
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

      return config;
    },
  }
);
