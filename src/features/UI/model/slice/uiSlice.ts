import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type UISchema } from '../types/UISchema';

const initialState: UISchema = {
  scroll: {}
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    saveScrollPosition: (state, action: PayloadAction<{ pathname: string, position: number }>) => {
      state.scroll[action.payload.pathname] = action.payload.position;
    }
  }
});

export const {
  actions: uiActions,
  reducer: uiReducer
} = uiSlice;
