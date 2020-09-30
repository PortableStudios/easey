const transpileModules = require('../transpileModules');

module.exports = {
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
  webpackFinal: async (config) => {
    // Find the loader that transpiles ES6 modules and add our list of modules to the regex
    // https://github.com/storybookjs/storybook/blob/master/lib/core/src/server/common/es6Transpiler.js
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
    }

    return config;
  },
};
