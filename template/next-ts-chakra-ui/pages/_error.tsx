import React from 'react';
import NextError from 'next/error';
import type { ErrorProps } from 'next/error';
import type { NextPageContext } from 'next';
import * as Sentry from '@sentry/nextjs';

// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#capture-react-component-errors
const MyError = ({ statusCode }: ErrorProps) => {
  return <NextError statusCode={statusCode} />;
};

MyError.getInitialProps = async (context: NextPageContext) => {
  // Only reports 5xx errors, so 404s won't be sent to Sentry
  await Sentry.captureUnderscoreErrorException(context);

  return NextError.getInitialProps(context);
};

export default MyError;
