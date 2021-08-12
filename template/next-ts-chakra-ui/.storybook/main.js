const path = require('path');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../node_modules/@portablestudios/figma2theme/lib/**/*.stories.js',
    '../src/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storycap/register',
  ],
  // https://github.com/storybookjs/storybook/issues/12952#issuecomment-719871776
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, '@babel/plugin-transform-react-jsx'],
  }),
  webpackFinal: async (config) => {
    // Insert our custom polyfill file in to the beginning of the entry point
    config.entry.unshift('./src/polyfills.ts');

    // Copied from Chakra UI repo to make Chakra work correctly in Storybook
    // https://github.com/chakra-ui/chakra-ui/blob/e2a6237170a7c6b308235d81ebbf66786d01616d/.storybook/main.js#L11
    return {
      ...config,
      resolve: {
        ...config.resolve,
        fallback: {
          ...config.resolve.fallback,
          crypto: false,
        },
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
