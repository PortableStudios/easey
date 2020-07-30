import * as Sentry from '@sentry/node';
import type { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';

Sentry.init({
  enabled: (process.env.SENTRY_ENVIRONMENT ?? '') !== '',
  dsn: process.env.SENTRY_DSN,
  environment: process.env.SENTRY_ENVIRONMENT,
});

export const sentryHandler = (apiHandler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      return await apiHandler(req, res);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      Sentry.captureException(error);
      await Sentry.flush(2000);
      res.status(500).end();
      return error;
    }
  };
};
