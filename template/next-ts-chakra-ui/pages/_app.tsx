import React, { useEffect } from 'react';
import { Router } from 'next/router';
import type { AppProps } from 'next/app';

import { pageview } from '@/utils/gtag';
import AppProvider from '@/components/AppProvider';

const App = ({ Component, pageProps, err }: AppProps & { err: Error }) => {
  // Send pageview events to Google Analytics
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <AppProvider>
      {/* Workaround for https://github.com/zeit/next.js/issues/8592 */}
      <Component {...pageProps} err={err} />
    </AppProvider>
  );
};

export default App;
