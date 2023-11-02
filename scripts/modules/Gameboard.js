const Gameboard = (function () {
  const gameField = new Array(9).fill(null);

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

  const checkForWin = (activePlayer) => {
    const marker = activePlayer.getMarker();
    let winConditionMet = false;

    for (const combination of winningCombinations) {
      winConditionMet = combination.every((index) => {
        return gameField[index] === marker;
      });

      if (winConditionMet) {
        console.log("win condition was met: ", winConditionMet);
        console.log("winning player is: ", activePlayer);
        break;
      }
    }

    return winConditionMet;
  };

  return { getField, resetField, addMarker, checkForWin };
})();

export default Gameboard;
