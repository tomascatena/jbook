import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { cellsActions } from '../store/features/cells/cellsSlice';
import { bundlesActions } from '../store/features/bundles/bundlesSlice';
import { useMemo } from 'react';

const actions = {
  ...cellsActions,
  ...bundlesActions,
};

export const useActions = (): typeof actions => {
  const dispatch = useDispatch();

  return useMemo(() => {
    return bindActionCreators(actions, dispatch);
  }, [dispatch]);
};
