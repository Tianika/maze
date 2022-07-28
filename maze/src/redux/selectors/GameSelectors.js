export const difficultySelector = (state) => {
  return state.game.difficulty;
};

export const userSelectionSelector = (state) => {
  return state.game.userSelection;
};

export const movesSelector = (state) => {
  return state.game.moves;
};

export const answerSelector = (state) => {
  return state.game.answer;
};
