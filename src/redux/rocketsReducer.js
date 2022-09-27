import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from '../middleware/api';

const initialState = [];

const createRocketSlices = createSlice({
  name: 'rocketSlices',
  initialState,
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {
      const rockets = action.payload;
      return rockets;
    },
  },
});

export default createRocketSlices.reducer;
