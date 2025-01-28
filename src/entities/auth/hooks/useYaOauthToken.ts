'use client';

/**
 * Returns the OAuth token from the URL hash if it's present.
 *
 * On success, returns the OAuth token as a string. On failure, returns null.
 *
 * Example:
 *   Given the URL `http://localhost:3000#access_token=token123`
 *   `useYaOauthToken()` will return `token123`.
 *
 * @returns {string | null} The OAuth token or null.
 */
export const useYaOauthToken = (): string | null => {
  const hash = window.location.hash;
  if (hash) {
    const queryParams = new URLSearchParams(hash.slice(1));
    const token = queryParams.get('access_token');
    return token;
  } else {
    return null;
  }
};
