export const getRandomNum = (max, min = 1) => {
  return Math.round(Math.random() * (max - min) + min);
};
