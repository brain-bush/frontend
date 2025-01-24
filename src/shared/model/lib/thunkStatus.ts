import type { Action } from '@reduxjs/toolkit';

export const isPending = (action: Action) => action.type.endsWith('pending');

export const isFulfilled = (action: Action) =>
  action.type.endsWith('fulfilled');

export const isRejected = (action: Action) => action.type.endsWith('rejected');

export const isCompleted = (action: Action) =>
  isFulfilled(action) || isRejected(action);
