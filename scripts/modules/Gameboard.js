const Gameboard = (function () {
  let gameField = new Array(9).fill(null);

  const getField = () => {
    console.log("the field is currently: ", gameField);
    return gameField;
  };

  const resetField = () => {
    gameField.forEach((_, index) => {
      gameField[index] = null;
    });
  };

  const addMarker = (index, player) => {
    if (gameField[index] === null) {
      gameField[index] = player.getMarker();
    } else {
      throw new Error("That slot is filled!");
    }
  };

  return { getField, resetField, addMarker };
})();

export default Gameboard;
