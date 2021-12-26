import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Cell } from '../../cell';
import axios from 'axios';

export const fetchCells = createAsyncThunk<Cell[], void, { state: RootState }>(
  'cells/fetchCells',
  async (_, { getState, requestId }) => {
    const { loading, currentRequestId } = getState().cells;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    const { data } = await axios.get('/cells');

    return data;
  }
);

export const saveCells = createAsyncThunk<void, void, { state: RootState }>(
  'cells/saveCells',
  async (_, { getState, requestId }) => {
    const { loading, currentRequestId, data, order } = getState().cells;

    if (!loading || requestId !== currentRequestId) {
      return;
    }

    const cells = order.map((id) => data[id]);

    await axios.post('/cells', { cells });
  }
);
