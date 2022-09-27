import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocketsReducer';

const allReducers = combineReducers({ rockets: rocketsReducer });
const store = configureStore({ reducer: allReducers });

export default store;
