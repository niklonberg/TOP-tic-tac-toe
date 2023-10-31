export const Gameboard = (function () {
  const gameField = new Array(9).fill(null);
  const getField = () => gameField;

  const addMarker = (index, player) => {
    gameField[index] = player.marker;
  };

  return { getField, addMarker };
})();
