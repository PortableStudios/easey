import React from 'react';
import NextError from 'next/error';
import type { ErrorProps } from 'next/error';
import type { NextPageContext } from 'next';
import * as Sentry from '@sentry/nextjs';

type Props = {
  statusCode: number;
  hasGetInitialPropsRun: boolean;
  err?: Error;
};

type GetInitialProps = {
  getInitialProps({
    res,
    err,
  }: NextPageContext): Promise<ErrorProps> | ErrorProps;
};

// Code based on https://github.com/zeit/next.js/tree/master/examples/with-sentry-simple
const MyError: GetInitialProps = ({
  statusCode,
  hasGetInitialPropsRun,
  err,
}: Props) => {
  if (!hasGetInitialPropsRun && err) {
    // Workaround for https://github.com/zeit/next.js/issues/8592
    Sentry.captureException(err);
  }

  return <NextError statusCode={statusCode} />;
};

MyError.getInitialProps = async ({ res, err, asPath, ...rest }) => {
  const errorInitialProps = (await NextError.getInitialProps({
    res,
    err,
    asPath,
    ...rest,
  })) as Props;

  // Workaround for https://github.com/zeit/next.js/issues/8592
  errorInitialProps.hasGetInitialPropsRun = true;

  if (res) {
    // Catch server-side errors
    if (res.statusCode === 404) {
      // Don't report 404 errors to Sentry
      return { statusCode: 404 };
    }
    if (err) {
      Sentry.captureException(err);
      return errorInitialProps;
    }
  } else if (err) {
    // Catch client-side errors
    Sentry.captureException(err);
    return errorInitialProps;
  }

  // Method was unexpectedly called without error information
  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
  );
  return errorInitialProps;
};

export default MyError;
