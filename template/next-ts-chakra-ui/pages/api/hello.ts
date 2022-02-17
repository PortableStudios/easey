import { withSentry } from '@sentry/nextjs';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = {
  response: string;
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Hit http://localhost:3000/api/hello to test this route
const handler = async (
  _req: NextApiRequest,
  res: NextApiResponse<Response>
) => {
  res.status(200).json({ response: 'Hello world!' });
};

export default withSentry(handler);
