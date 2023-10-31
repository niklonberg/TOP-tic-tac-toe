const createPlayer = function (name, marker, isActive = false) {
  let score = 0;
  const mark = marker;

  const getScore = () => score;

  const incrementScore = () => ++score;

  const getMarker = () => mark;

  return { name, isActive, getScore, incrementScore, getMarker };
};

export default createPlayer;
