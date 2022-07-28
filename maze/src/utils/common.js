export const getRandomNum = (max, min = 1) => {
  return Math.round(Math.random() * (max - min) + min);
};

export const shuffleArray = (array) => {
  array.sort(() => Math.random() - 0.5);
};
