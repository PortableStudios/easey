/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import type { NextRouter } from 'next/router';

// https://github.com/vercel/next.js/issues/7479#issuecomment-659859682
const mockRouter: NextRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: () => new Promise((_, reject) => reject()),
  replace: () => new Promise((_, reject) => reject()),
  reload: () => {},
  back: () => {},
  prefetch: () => new Promise((_, reject) => reject()),
  beforePopState: () => {},
  events: {
    on: () => {},
    off: () => {},
    emit: () => {},
  },
  isFallback: false,
  isReady: false,
  isLocaleDomain: false,
  isPreview: false,
};

type Props = {
  children: React.ReactNode;
};

const MockRouterProvider = ({ children }: Props) => {
  return (
    <RouterContext.Provider value={mockRouter}>
      {children}
    </RouterContext.Provider>
  );
};

export default MockRouterProvider;
