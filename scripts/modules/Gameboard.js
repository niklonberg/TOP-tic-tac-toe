const Gameboard = (function () {
  let gameField = new Array(9).fill(null);

  const getField = () => gameField;

  const resetField = () => {
    gameField.forEach((_, index) => {
      gameField[index] = null;
    });
  };

  const addMarker = (index, player) => {
    /* const activePlayer = getActivePlayer() */
    if (gameField[index] === null) {
      gameField[index] = player.getMarker();
    } else {
      throw new Error("That slot is filled!");
    }
  };

  return { getField, resetField, addMarker };
})();

export default Gameboard;
