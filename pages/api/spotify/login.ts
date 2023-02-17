import type { NextApiRequest, NextApiResponse } from 'next'
import querystring from 'querystring';

declare var access_token: string;
declare var refresh_token: string;


const redirect_uri = `${process.env.ROOT_URL}api/spotify/login-callback`;

/**
 * Grant app access to Spotify
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  // requests authorization
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope: 'user-read-private user-read-email user-top-read',
      redirect_uri: redirect_uri,
      state: 'inorganik',
    }));
}