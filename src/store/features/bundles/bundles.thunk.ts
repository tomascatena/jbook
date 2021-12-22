import { createAsyncThunk } from '@reduxjs/toolkit';
import bundler from '../../../bundler';
import { RootState } from '../../store';
import { bundlesActions, Bundle } from './bundlesSlice';

export const createBundle = createAsyncThunk<
  Bundle | undefined,
  { cellId: string; rawCode: string },
  { state: RootState }
>(
  'bundles/createBundle',
  async (
    { cellId, rawCode },
    { dispatch, getState }
  ): Promise<Bundle | undefined> => {
    dispatch(bundlesActions.setCurrentCellId(cellId));

    const { cellBundles } = getState().bundles;

    if (!cellBundles[cellId] || cellBundles[cellId]?.isBundling) {
      return;
    }

    dispatch(bundlesActions.startBundling(cellId));

    let bundle: Bundle = {
      code: '',
      err: '',
    };

    try {
      const result = await bundler(rawCode);

      bundle = {
        code: result.outputFiles[0].text,
        err: null,
      };
    } catch (error) {
      if (error instanceof Error) {
        bundle = {
          code: '',
          err: error.message,
        };
      }
    } finally {
      dispatch(
        bundlesActions.completeBundling({
          cellId,
          bundle,
        })
      );

      return bundle;
    }
  }
);
