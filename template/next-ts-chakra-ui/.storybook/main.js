const path = require('path');
const transpileModules = require('../transpileModules');

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    '../node_modules/@portablestudios/chakra-flexboxgrid/lib/cjs/**/*.stories.js',
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
    // Find the loader that transpiles ES6 modules and add our list of modules to the regex
    // https://github.com/storybookjs/storybook/blob/master/lib/core/src/server/common/es6Transpiler.ts
    if (transpileModules.length > 0) {
      const transpiler = config.module.rules.find((rule) => {
        return (
          rule.include instanceof RegExp &&
          rule.include.source.includes(String.raw`[\\/]node_modules[\\/]`)
        );
      });
      const regex = transpiler.include.source;
      const modules = transpileModules.join('|');
      transpiler.include = new RegExp(`${regex.slice(0, -1)}|${modules})`);
      // Adjust transpilation test to include .mjs files (added to transpile `dequal` dependency)
      // https://dev.to/crenshaw_dev/don-t-forget-to-ask-babel-to-compile-mjs-files-h85
      transpiler.test = /(\.js|\.mjs)$/;
    }

    // Insert our custom polyfill file in to the beginning of the entry point
    config.entry.unshift('./src/polyfills.ts');

    // Copied from Chakra UI repo to make Chakra work correctly in Storybook
    // https://github.com/chakra-ui/chakra-ui/blob/e2a6237170a7c6b308235d81ebbf66786d01616d/.storybook/main.js#L11
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
