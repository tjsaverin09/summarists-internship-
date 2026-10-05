import { useSelector as useReduxSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './store';


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useReduxSelector.withTypes<RootState>();