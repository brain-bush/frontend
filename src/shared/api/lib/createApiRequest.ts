import type { FetchArgs } from '@reduxjs/toolkit/query';
import snakify from 'snakify-ts';

/**
 * Converts any request body to snake_case before sending it to the API.
 *
 * @param args - The fetch request arguments.
 * @returns The modified fetch request arguments.
 */
export const createApiRequest = (args: FetchArgs): FetchArgs => {
  return {
    ...args,
    body: args.body && snakify(args.body),
  };
};
