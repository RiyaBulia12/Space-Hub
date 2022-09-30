import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/';
const fetchRockets = createAsyncThunk(
  'fetchRockets',
  async () => {
    try {
      const getRockets = await axios.get(`${baseUrl}rockets`);
      return getRockets.data;
    } catch (error) {
      return error;
    }
  },
);

export default fetchRockets;
