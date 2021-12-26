import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cellsReducer from './features/cells/cellsSlice';
import bundlesReducer from './features/bundles/bundlesSlice';
import { persistMiddleware } from './middlewares/persistMiddleware';

export const store = configureStore({
  reducer: {
    cells: cellsReducer,
    bundles: bundlesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
