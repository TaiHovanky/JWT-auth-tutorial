import { Response } from 'express';

export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie(
    'jid',
    token,
    {
      httpOnly: true,
      path: '/refresh_token'
    }
    // the path makes it so other requests don't send a refresh token
  );
}