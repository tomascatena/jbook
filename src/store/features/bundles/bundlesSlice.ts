import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createBundle } from './bundles.thunk';

export interface Bundle {
  code: string;
  err: string | null;
}

export interface BundlesState {
  currentCellId: string | null;
  cellBundles: {
    [key: string]: {
      isBundling: boolean;
      code: string;
      err: string | null;
    };
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
      state.cellBundles[action.payload] = {
        isBundling: true,
        code: '',
        err: null,
      };
    },
    removeBundle(state, action: PayloadAction<string>) {
      delete state.cellBundles[action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBundle.pending, (state, action) => {
        const { cellBundles, currentCellId } = state;

        if (!currentCellId) {
          return;
        }

        const cell = cellBundles[currentCellId];

        if (cell.isBundling === false) {
          cell.isBundling = true;
          cell.err = null;
        }
      })
      .addCase(createBundle.fulfilled, (state, action) => {
        const { cellBundles, currentCellId } = state;

        if (!currentCellId) {
          return;
        }

        const cell = cellBundles[currentCellId];

        if (cell.isBundling === true) {
          cell.isBundling = false;
          cell.code = action.payload.code;
          cell.err = action.payload.err;
        }
      })
      .addCase(createBundle.rejected, (state, action) => {
        const { cellBundles, currentCellId } = state;

        if (!currentCellId) {
          return;
        }

        const cell = cellBundles[currentCellId];

        if (cell.isBundling === true) {
          cell.isBundling = false;
          cell.code = '';
          cell.err = action.payload ? action.payload.err : 'error';
        }
      });
  },
});

export const bundlesActions = bundlesSlice.actions;

export default bundlesSlice.reducer;
