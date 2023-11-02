import Gameboard from "./Gameboard.js";

const GameController = (function () {
  const board = Gameboard;
  const players = [];
  /* have a way to empty players
     so we can store multiple users and add two
     in when startGame runs */

  const addPlayer = (player) => {
    if (players.length < 2) {
      players.push(player);
    } else {
      throw new Error("Player count limit reached");
    }
  };

  const getActivePlayer = () => {
    return players.find((player) => player.getActiveStatus());
  };

  const switchActivePlayer = () => {
    players.forEach((player) => player.switchActiveStatus());
  };

  const playRound = (index) => {
    const activePlayer = getActivePlayer();
    board.addMarker(index, activePlayer);
    const winConditionMet = board.checkForWin(activePlayer);
    winConditionMet
      ? (console.log("game is over!"), endGame(activePlayer))
      : switchActivePlayer();
  };

  const startGame = () => {
    /* playRound() */
    /* check for win condition, if so endGame() */
    /* re run playRound()*/
  };

  const endGame = (activePlayer) => {
    /* x player wins! */
    activePlayer.incrementScore();
    /* player1.getScore(), player2.getScore() */
    /* play again? button */
    /* if so, resetField() */
    /* empty players array */
    /* startGame() */
  };

  return {
    getField: board.getField,
    addPlayer,
    switchActivePlayer /* delete? */,
    getActivePlayer,
    playRound,
  };
})();

export default GameController;
