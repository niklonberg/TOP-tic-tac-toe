export const createPlayer = function (name, marker) {
  let score = 0;
  const mark = marker;

  const getScore = () => score;

  const incrementScore = () => ++score;

  const getMarker = () => mark;

  return { name, getScore, incrementScore, getMarker };
};
