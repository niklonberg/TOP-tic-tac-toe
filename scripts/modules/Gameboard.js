const Gameboard = (function () {
  const gameField = new Array(9).fill(null);

  const getField = () => gameField;

  const addMarker = (index, player) => {
    gameField[index] = player.getMarker();
  };

  return { getField, addMarker };
})();

export default Gameboard;
