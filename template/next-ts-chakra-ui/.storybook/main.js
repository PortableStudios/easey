module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    'storycap/register',
  ],
};
