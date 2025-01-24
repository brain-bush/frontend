import type * as AppTypes from '@/app/types';

declare global {
  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux inferring types from @/app/types
   * and use it in @/shared/model/hooks
   */
  declare type AppStore = AppTypes.AppStore;

  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux inferring types from @/app/types
   * and use it in @/shared/model/hooks
   */
  declare type RootState = AppTypes.RootState;

  /**
   * ⚠️ FSD
   *
   * Its hack way to export redux inferring types from @/app/types
   * and use it in @/shared/model/hooks
   */
  declare type AppDispatch = AppTypes.AppDispatch;
}
export {};
