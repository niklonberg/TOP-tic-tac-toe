import Gameboard from "./Gameboard.js";

const GameController = (function () {
  const board = Gameboard;
  const players = [];

  const addPlayer = (player) => {
    if (players.length < 2) {
      players.push(player);
    } else {
      throw new Error("Player count limit reached");
    }
  };

  const switchActivePlayer = () => {
    players.forEach((player) => {
      player.isActive = !player.isActive;
      console.log(`Player ${player.name} is active: ${player.isActive}`);
    });
  };

  /*
  Need activePlayer tracker/variable? or do i?
  */
  const playRound = (player) => {
    /* active player sets down their marker */
    /* switch active player */
    board.addMarker(0, player);
  };

  /* (this function could recursively call playRound?) */
  const startGame = () => {
    /* set active player */
    /* playRound() */
    /* check for win condition, if so endGame() */
    /* re run playRound()*/
  };

  const endGame = () => {
    /* x player wins! */
    /* winning player.incrementScore() */
    /* player1.getScore(), player2.getScore() */
    /* play again? button */
    /* if so, resetField() */
    /* startGame() */
  };

  return { board, players, addPlayer, switchActivePlayer };
})();

export default GameController;
