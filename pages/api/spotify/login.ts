import type { NextApiRequest, NextApiResponse } from 'next';

declare var access_token: string;
declare var refresh_token: string;

const redirect_uri = `${process.env.ROOT_URL}api/spotify/login-callback`;

/**
 * Grant app access to Spotify
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // requests authorization
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID ?? '',
    scope: 'user-read-private user-read-email user-top-read',
    redirect_uri,
    state: 'inorganik',
  });

  res.redirect('https://accounts.spotify.com/authorize?' + params.toString());
}
