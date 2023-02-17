import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import querystring from 'querystring';


interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}


/**
 * Request a Spotify access token
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code || null;
  const state = req.query.state || null;
  const redirect_uri = `${process.env.ROOT_URL}api/spotify/login-callback`;

  const data = {
    grant_type: 'authorization_code',
    code,
    redirect_uri,
  };

  let access_token = '';
  let refresh_token = '';

  if (state !== 'inorganik') {
    res.status(400);
  } else {
    const authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      data: querystring.stringify(data),
      headers: {
        'Authorization': 'Basic ' + Buffer.from(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    try {
      const response = await axios<SpotifyTokenResponse>(authOptions);
      console.log('response', response.data);
      access_token = response.data.access_token;
      refresh_token = response.data.refresh_token;
    } catch (error) {
      console.log('error requesting tokens', error)
      return res.status(400).json(error);
    };

    try {
      const topArtists = await axios.get('https://api.spotify.com/v1/me/top/artists', {
        headers: {
          'Authorization': `Bearer ${access_token}`,
        },
        params: {
          limit: 3,
        },
      });
      res.json(topArtists.data);
    } catch (error) {
      console.log('error requesting data', (error as any).code)
      return res.status(400).json(error);
    }
  }
}