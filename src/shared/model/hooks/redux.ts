import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from 'react-redux';

export const useAppStore: () => AppStore = useStore;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
