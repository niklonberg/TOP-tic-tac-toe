const createPlayer = function (name, marker, active) {
  let score = 0;
  let mark = marker;
  let isActive = active;

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
