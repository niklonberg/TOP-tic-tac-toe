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

  const getActivePlayer = () => {
    return players.filter((player) => player.getActiveStatus());
  };

  const switchActivePlayer = () => {
    players.forEach((player) => {
      player.switchActiveStatus();
    });
  };

  const playRound = () => {
    const activePlayer = getActivePlayer();
    /* active player sets down their marker */
    board.addMarker(0, activePlayer);
    /* switch active player */
  };

  /* (this function could recursively call playRound?) */
  const startGame = () => {
    /* set player[0] to active */
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

  return { board, players, addPlayer, switchActivePlayer, getActivePlayer };
})();

export default GameController;
