'use client';

import { useEffect } from 'react';
import { actions } from '../model';
import { useAppDispatch } from '@/shared/model';

/**
 * Custom hook to handle OAuth login using a token.
 * Dispatches a login action with the provided token when the token is available.
 *
 * @param oauthToken - The OAuth token to be used for login. If null, no action is taken.
 */

export const useOauthLogin = (oauthToken: string | null): void => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (oauthToken) {
      dispatch(actions.login({ oauthToken }));
    }
  }, [oauthToken, dispatch]);
};
