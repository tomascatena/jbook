import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CellTypes, Cell, Direction } from '../../cell';

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
    ) => {},
    deleteCell: (state, action: PayloadAction<string>) => {},
    insertCellBefore: (
      state,
      action: PayloadAction<{ id: string; type: CellTypes }>
    ) => {},
    insertCellAfter: (
      state,
      action: PayloadAction<{ id: string; type: CellTypes }>
    ) => {},
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
