import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CellTypes, Cell, Direction } from '../../cell';
import { v4 as uuidv4 } from 'uuid';

export interface CellsState {
  data: { [key: string]: Cell };
  loading: boolean;
  error: string | null;
  order: string[];
}

const initialState: CellsState = {
  data: {},
  loading: false,
  error: null,
  order: [],
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
});

export const cellsActions = cellsSlice.actions;

export default cellsSlice.reducer;
