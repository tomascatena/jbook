import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cellsActions } from '../store/features/cells/cellsSlice';
import { bundlesActions } from '../store/features/bundles/bundlesSlice';

const actions = {
  ...cellsActions,
  ...bundlesActions,
};

export const useActions = (): typeof actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
