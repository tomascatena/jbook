import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { CellTypes, Cell, Direction } from '../../cell';
import { v4 as uuidv4 } from 'uuid';
import { fetchCells, saveCells } from './cellsSlice.thunk';

export interface CellsState {
  data: { [key: string]: Cell };
  loading: boolean;
  error: string | null | SerializedError;
  order: string[];
  currentRequestId: string | undefined;
  saveError: string | null | SerializedError;
}

const initialState: CellsState = {
  data: {},
  loading: false,
  error: null,
  order: [],
  currentRequestId: undefined,
  saveError: null,
};

export const cellsSlice = createSlice({
  name: 'cell',
  initialState,
  reducers: {
    moveCell: (
      state,
      action: PayloadAction<{ id: string; direction: Direction }>
    ) => {
      const { direction } = action.payload;
      const index = state.order.findIndex((id) => id === action.payload.id);
      const targetIndex = direction === 'up' ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return; // invalid state update
      }

      [
        state.order[index], //
        state.order[targetIndex],
      ] = [
        state.order[targetIndex], //
        state.order[index],
      ];
    },
    deleteCell: (state, action: PayloadAction<string>) => {
      delete state.data[action.payload];

      state.order = state.order.filter((id) => id !== action.payload);
    },
    insertCell: (
      state,
      action: PayloadAction<{ id: string | null; type: CellTypes }>
    ) => {
      const { type } = action.payload;

      const cell: Cell = {
        id: uuidv4(),
        type,
        content: '',
      };

      state.data[cell.id] = cell;

      const index = state.order.findIndex((id) => id === action.payload.id);

      if (index < 0) {
        state.order.unshift(cell.id);
      } else {
        state.order.splice(index + 1, 0, cell.id);
      }
    },
    updateCell: (
      state,
      action: PayloadAction<{ id: string; content: string }>
    ) => {
      const { id, content } = action.payload;

      state.data[id].content = content;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCells.pending, (state, action) => {
        if (state.loading === false) {
          state.loading = true;
          state.error = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(fetchCells.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.loading = false;
          state.currentRequestId = undefined;
          state.order = action.payload.map((cell) => cell.id);
          state.data = action.payload.reduce((accumulator, cell) => {
            accumulator[cell.id] = cell;
            return accumulator;
          }, {} as CellsState['data']);
        }
      })
      .addCase(fetchCells.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.loading = false;
          state.error = action.error;
          state.currentRequestId = undefined;
        }
      })
      .addCase(saveCells.pending, (state, action) => {
        if (state.loading === false) {
          state.loading = true;
          state.saveError = null;
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(saveCells.fulfilled, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.loading = false;
          state.currentRequestId = undefined;
        }
      })
      .addCase(saveCells.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (state.loading === true && state.currentRequestId === requestId) {
          state.loading = false;
          state.saveError = action.error;
          state.currentRequestId = undefined;
        }
      });
  },
});

export const cellsActions = cellsSlice.actions;

export default cellsSlice.reducer;
