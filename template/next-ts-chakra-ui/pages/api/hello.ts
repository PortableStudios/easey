import { sentryHandler } from '@/utils/api';
import type { NextApiRequest, NextApiResponse } from 'next';

type Response = {
  response: string;
};

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Hit http://localhost:3000/api/hello to test this route
export default sentryHandler(
  async (_req: NextApiRequest, res: NextApiResponse<Response>) => {
    res.status(200).json({ response: 'Hello world!' });
  }
);
