'use client';

import { useEffect } from 'react';
import { actions } from '../model';
import { useAppDispatch } from '@/shared/model';

/**
 * Custom hook to handle OAuth login using a token.
 * Dispatches a login action with the provided token when the token is available.
 *
 * @param token - The OAuth token to be used for login. If null, no action is taken.
 */

export const useOauthLogin = (token: string | null): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(actions.login({ token }));
    }
  }, [token, dispatch]);
};
