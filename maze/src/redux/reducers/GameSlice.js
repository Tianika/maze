import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isGame: false,
  difficulty: 3,
  level: 1,
  moves: 10,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeIsGame: (state) => {
      state.isGame = !state.isGame;
    },
    changeDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    changeLevel: (state, action) => {
      state.level = action.payload;
    },
    changeMoves: (state, action) => {
      state.moves = action.payload;
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { changeIsGame, changeDifficulty, changeLevel, changeMoves } = gameSlice.actions;
