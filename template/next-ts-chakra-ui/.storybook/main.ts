import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  framework: '@storybook/nextjs',
  staticDirs: ['../public'],
  stories: [
    // TODO: Update figma2theme and uncomment this
    // '../node_modules/@portablestudios/figma2theme/lib/**/*.stories.js',
    '../src/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-designs',
    'storycap/register',
  ],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...(options.plugins ?? []),
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
    (config.entry as string[]).unshift('./src/polyfills.ts');

    return config;
  },
};

export default config;
