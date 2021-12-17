import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BundlesState {}

const initialState: BundlesState = {};

export const bundlesSlice = createSlice({
  name: 'bundles',
  initialState,
  reducers: {},
});

export const bundlesActions = bundlesSlice.actions;

export default bundlesSlice.reducer;
