/* eslint-disable no-param-reassign */
require('dotenv').config();
const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const withPlugins = require('next-compose-plugins');
const sourceMapsPlugin = require('@zeit/next-source-maps');
const bundleAnalyzerPlugin = require('@next/bundle-analyzer');
const optimizedImagesPlugin = require('next-optimized-images');
const transpileModulesPlugin = require('next-transpile-modules');

const transpileModules = require('./transpileModules');

module.exports = withPlugins(
  [
    sourceMapsPlugin(),
    transpileModulesPlugin(transpileModules),
    [
      bundleAnalyzerPlugin,
      {
        enabled: process.env.ANALYZE === 'true',
      },
    ],
    [
      optimizedImagesPlugin,
      {
        optimizeImagesInDev: true,
        // https://github.com/cyrilwanner/next-optimized-images/issues/114#issuecomment-634940408
        imagesFolder: 'chunks/images',
      },
    ],
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
