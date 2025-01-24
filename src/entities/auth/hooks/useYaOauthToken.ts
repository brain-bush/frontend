'use client';

import { useSearchParams } from 'next/navigation';

/**
 * Hook to get the OAuth token from the URL search parameters.
 *
 * @returns The OAuth token if it is present in the URL search parameters, or null if it is not.
 */
export const useYaOauthToken = (): string | null => {
  const searchParams = useSearchParams();

  if (!searchParams) return null;

  const token = searchParams.get('access_token');

  return token;
};
