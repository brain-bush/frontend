import type { Action } from '@reduxjs/toolkit';

/**
 * Checks if action is a rejected action.
 *
 * @param {Action} action - An action which type will be checked.
 *
 * @returns {boolean} True if action is rejected, false otherwise.
 */
export const isRejected = (action: Action): boolean =>
  action.type.endsWith('rejected');

/**
 * Checks if action is a pending action.
 *
 * @param {Action} action - An action which type will be checked.
 *
 * @returns {boolean} True if action is pending, false otherwise.
 */
export const isPending = (action: Action): boolean =>
  action.type.endsWith('pending');

/**
 * Checks if action is a fulfilled action.
 *
 * @param {Action} action - An action which type will be checked.
 *
 * @returns {boolean} True if action is fulfilled, false otherwise.
 */
export const isFulfilled = (action: Action): boolean =>
  action.type.endsWith('fulfilled');

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Checks if action is either fulfilled or rejected.
 *
 * @param {Action} action - An action which type will be checked.
 *
 * @returns {boolean} True if action is completed, false otherwise.
 */
/******  bd08f88c-828e-417c-a272-bb050989b797  *******/ export const isCompleted =
  (action: Action): boolean => isFulfilled(action) || isRejected(action);
