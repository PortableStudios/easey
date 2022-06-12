const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../node_modules/@portablestudios/figma2theme/lib/**/*.stories.js',
    '../src/**/*.stories.tsx',
  ],
  features: {
    emotionAlias: false,
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storycap/register',
  ],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          alias: { '@': path.resolve(__dirname, '../src') },
        },
      ],
    ],
  }),
  webpackFinal: async (config) => {
    // Insert our custom polyfill file in to the beginning of the entry point
    config.entry.unshift('./src/polyfills.ts');

    return config;
  },
};
