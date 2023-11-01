const Gameboard = (function () {
  let gameField = new Array(9).fill(null);
  const winningCombinations = [
    //horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

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
