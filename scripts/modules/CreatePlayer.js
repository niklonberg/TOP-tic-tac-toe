const createPlayer = function (name, marker, active = false) {
  let score = 0;
  let isActive = active;
  const mark = marker;

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
