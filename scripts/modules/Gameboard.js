const Gameboard = (function () {
  let gameField = new Array(9).fill(null);

  const getField = () => gameField;

  const resetField = () => {
    gameField = new Array(9).fill(null);
  };

  const addMarker = (index, player) => {
    gameField[index] = player.getMarker();
  };

  return { getField, resetField, addMarker };
})();

export default Gameboard;
