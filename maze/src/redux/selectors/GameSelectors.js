export const isGameSelector = (state) => {
  return state.game.isGame;
};

export const difficultySelector = (state) => {
  return state.game.difficulty;
};

export const levelSelector = (state) => {
  return state.game.level;
};

export const movesSelector = (state) => {
  return state.game.moves;
};
