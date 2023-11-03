const createPlayer = function (name) {
  let score = 0;
  let isActive = false;
  let mark = null;

  const getScore = () => score;

  const incrementScore = () => ++score;

  const getMarker = () => mark;

  const getActiveStatus = () => isActive;

  const switchActiveStatus = () => (isActive = !isActive);

  return {
    name,
    getScore,
    incrementScore,
    getMarker,
    getActiveStatus,
    switchActiveStatus,
  };
};

export default createPlayer;
