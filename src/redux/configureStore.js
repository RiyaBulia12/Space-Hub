import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './slices/rocketsReducer';
import mission from './slices/missionReducer';

const allReducers = combineReducers({ rockets: rocketsReducer, missions: mission });
const store = configureStore({ reducer: allReducers });

export default store;
