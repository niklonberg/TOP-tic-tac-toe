export const createPlayer = function (name, marker) {
  let score = 0;

  const getScore = () => score;

  const incrementScore = () => ++score;

  return { name, marker, getScore, incrementScore };
};
