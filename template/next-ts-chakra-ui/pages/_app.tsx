import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import * as Sentry from '@sentry/node';
import type { AppProps } from 'next/app';

import { pageview } from '@/utils/gtag';
import AppProvider from '@/components/AppProvider';

Sentry.init({
  enabled: (process.env.SENTRY_ENVIRONMENT ?? '') !== '',
  dsn: process.env.SENTRY_DSN,
  environment: process.env.SENTRY_ENVIRONMENT,
});

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

  // Workaround for https://github.com/zeit/next.js/issues/8592
  const modifiedPageProps = { ...pageProps, err };

  return (
    <AppProvider>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&amp;display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...modifiedPageProps} />
    </AppProvider>
  );
};

export default App;
