import React from 'react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withScreenshot } from 'storycap';

import AppProvider from '../src/components/AppProvider';
import MockRouterProvider from '../src/utils/testing/MockRouterProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const withProviders = (Story: any) => {
  return (
    <MockRouterProvider>
      <AppProvider>
        <Story />
      </AppProvider>
    </MockRouterProvider>
  );
};

const decorators = [withProviders, withScreenshot()];

const parameters = {
  actions: { argTypesRegex: '^on.*' },
  options: { storySort: { method: 'alphabetical' } },
  viewport: {
    viewports: {
      cheapLaptop: {
        name: 'Cheap Laptop',
        styles: {
          width: '1366px',
          height: '768px',
        },
        type: 'desktop',
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1920px',
          height: '1080px',
        },
        type: 'desktop',
      },
      hugeDesktop: {
        name: 'Huge Desktop',
        styles: {
          width: '2560px',
          height: '1440px',
        },
      },
      ...INITIAL_VIEWPORTS,
    },
  },
  screenshot: {
    skip: true,
    viewports: {
      // iPhone 5
      _1_small_phone: {
        width: 320,
        height: 538,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
      },
      // iPhone 6/7/8
      _2_medium_phone: {
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
      },
      // iPhone 6/7/8 Plus
      _3_large_phone: {
        width: 414,
        height: 738,
        deviceScaleFactor: 3,
        isMobile: true,
        hasTouch: true,
      },
      // iPad (Portrait)
      _4_tablet_portrait: {
        width: 768,
        height: 1024,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
      },
      // iPad (Landscape)
      _5_tablet_landscape: {
        width: 1024,
        height: 768,
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
        isLandscape: true,
      },
      _6_laptop: {
        width: 1366,
        height: 768,
        deviceScaleFactor: 2,
        isLandscape: true,
      },
      _7_desktop: {
        width: 1920,
        height: 1080,
        deviceScaleFactor: 2,
        isLandscape: true,
      },
      _8_huge_desktop: {
        width: 2560,
        height: 1440,
        deviceScaleFactor: 2,
        isLandscape: true,
      },
    },
  },
};

const config = {
  decorators,
  parameters,
};

export default config;
