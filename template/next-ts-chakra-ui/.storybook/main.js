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
};
