import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';

export interface RootState {
  loginModal: {
    isOpen: boolean;
  };
  // Add other state slices as needed
}

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;