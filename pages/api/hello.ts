// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
    redirect_uri: `${process.env.ROOT_URL}api/spotify/login-callback`,
  })
}
