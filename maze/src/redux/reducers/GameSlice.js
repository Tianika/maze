import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isGame: false,
  difficulty: 3,
  level: 1,
  moves: 10,
  userSelection: {
    userX: 0,
    userY: 0,
  },
  answer: {
    x: 0,
    y: 0,
  },
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
    changeUserSelection: (state, action) => {
      const { x, y } = action.payload;

      state.userSelection = {
        userX: x,
        userY: y,
      };
    },
    changeAnswer: (state, action) => {
      const { x, y } = action.payload;

      state.answer = {
        answerX: x,
        answerY: y,
      };
    },
  },
});

export const gameReducer = gameSlice.reducer;
export const { changeIsGame, changeDifficulty, changeLevel, changeUserSelection, changeAnswer } =
  gameSlice.actions;
