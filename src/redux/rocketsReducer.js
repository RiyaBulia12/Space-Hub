import { createSlice } from '@reduxjs/toolkit';
import fetchRockets from '../middleware/api';

const initialState = [];

const createRocketSlices = createSlice({
  name: 'rocketSlices',
  initialState,
  reducers: {
    reserveRocket: {
      reducer: (state, action) => state.map(
        (rocket) => (
          rocket.id === +action.payload ? { ...rocket, reserved: true } : rocket
        ),
      ),
    },
    cancelRocket: {
      reducer: (state, action) => state.map(
        (rocket) => (
          rocket.id === +action.payload ? { ...rocket, reserved: false } : rocket
        ),
      ),
    },
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {
      const rockets = action.payload.map((item) => (
        {
          ...item,
          reserved: false,
        }
      ));
      return rockets;
    },
  },
});

export const { reserveRocket, cancelRocket } = createRocketSlices.actions;
export default createRocketSlices.reducer;
