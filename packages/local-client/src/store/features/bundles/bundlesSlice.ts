import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Bundle {
  code: string;
  err: string | null;
}

export interface BundlesState {
  currentCellId: string | null;
  cellBundles: {
    [key: string]:
      | {
          code: string;
          err: string | null;
          isBundling: boolean;
        }
      | undefined;
  };
}

const initialState: BundlesState = {
  currentCellId: null,
  cellBundles: {},
};

export const bundlesSlice = createSlice({
  name: 'bundles',
  initialState,
  reducers: {
    setCurrentCellId(state, action: PayloadAction<string>) {
      state.currentCellId = action.payload;

      if (!state.cellBundles[action.payload]) {
        state.cellBundles[action.payload] = {
          code: '',
          err: null,
          isBundling: false,
        };
      }
    },
    removeBundle(state, action: PayloadAction<string>) {
      delete state.cellBundles[action.payload];
    },
    startBundling(state, action: PayloadAction<string>) {
      state.cellBundles[action.payload] = {
        code: '',
        err: null,
        isBundling: false,
      };
    },
    completeBundling(
      state,
      action: PayloadAction<{ cellId: string; bundle: Bundle }>
    ) {
      const { cellId, bundle } = action.payload;

      state.cellBundles[cellId] = {
        code: bundle.code,
        err: bundle.err,
        isBundling: false,
      };
    },
  },
});

export const bundlesActions = bundlesSlice.actions;

export default bundlesSlice.reducer;
