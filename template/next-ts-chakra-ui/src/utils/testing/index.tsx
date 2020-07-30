import React from 'react';
import { render as rtlRender } from '@testing-library/react';

import AppProvider from '@/components/AppProvider';
import MockRouterProvider from './MockRouterProvider';

export const render = (ui: React.ReactNode) => {
  return {
    ...rtlRender(
      <MockRouterProvider>
        <AppProvider>{ui}</AppProvider>
      </MockRouterProvider>
    ),
  };
};
