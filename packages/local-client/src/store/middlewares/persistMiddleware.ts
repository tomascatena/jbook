import { saveCells } from '../features/cells/cellsSlice.thunk';
import { MiddlewareAPI, Dispatch, Middleware, AnyAction } from 'redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const persistMiddleware: Middleware = (store: MiddlewareAPI) => {
  return (next: Dispatch) => {
    return (action) => {
      next(action);

      if (
        [
          'cell/moveCell',
          'cell/updateCell',
          'cell/deleteCell',
          'cell/insertCell',
        ].includes(action.type)
      ) {
        (store.dispatch as ThunkDispatch<RootState, unknown, AnyAction>)(
          saveCells()
        );
      }
    };
  };
};
