import { createAsyncThunk } from '@reduxjs/toolkit';
import bundler from '../../../bundler';
import { RootState } from '../../store';
import { bundlesActions, Bundle } from './bundlesSlice';

export const createBundle = createAsyncThunk<
  Bundle,
  { cellId: string; rawCode: string },
  { state: RootState; rejectValue: Bundle }
>(
  'bundles/createBundle',
  async ({ cellId, rawCode }, { dispatch, rejectWithValue }) => {
    dispatch(bundlesActions.setCurrentCellId(cellId));

    try {
      const result = await bundler(rawCode);

      return {
        code: result.outputFiles[0].text,
        err: null,
      };
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue({
          code: '',
          err: error.message,
        });
      }

      return rejectWithValue({
        code: '',
        err: '',
      });
    }
  }
);
