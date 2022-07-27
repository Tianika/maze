import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gameReducer } from '../reducers/GameSlice';

const rootReducer = combineReducers({
  game: gameReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
