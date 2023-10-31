import Gameboard from "./Gameboard.js";

const GameController = (function () {
  const board = Gameboard;
  const players = {};

  const addPlayer = (player) => {
    if (Object.keys(players).length < 2) {
      players[player.name] = player;
    } else {
      throw new Error("Player count limit reached");
    }
  };

  /*
  Need activePlayer tracker/variable?
  */
  const playRound = () => {
    /* active player sets down their marker */
    /* switch active player */
  };

  /* (this function could recursively call playRound?) */
  const startGame = () => {
    /* get active player */
    /* playRound() */
    /* check for win condition, if so endGame() */
    /* re run playRound()*/
  };

  const endGame = () => {
    /* x player wins! */
    /* winning player.incrementScore() */
    /* player1.getScore(), player2.getScore() */
    /* play again? */
    /* if so, resetField() */
  };

  return { board, players, addPlayer };
})();

export default GameController;
