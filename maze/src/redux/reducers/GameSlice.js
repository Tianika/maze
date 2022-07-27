import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  difficulty: 3,
  userSelection: {
    x: 0,
    y: 0,
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    changeUserSelection: (state, action) => {
      const { x, y } = action.payload;

      state.userSelection = {
        x,
        y,
      };
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { changeDifficulty, changeUserSelection } = gameSlice.actions;
