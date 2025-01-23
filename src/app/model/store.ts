import { combineReducers, configureStore } from '@reduxjs/toolkit';

const mainReducer = combineReducers({});

export const makeStore = () =>
  configureStore({
    reducer: mainReducer,
  });
