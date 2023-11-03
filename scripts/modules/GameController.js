import Gameboard from "./Gameboard.js";
import createPlayer from "./CreatePlayer.js";

const GameController = (function () {
  const board = Gameboard;
  const players = [];

  const addPlayers = (chosenPlayers) => {
    chosenPlayers.forEach((player, index) => {
      const marker = index !== 1 ? "x" : "o";
      const active = index !== 1;
      const newPlayerObj = createPlayer(player, marker, active);
      players.push(newPlayerObj);
    });
  };

  const emptyPlayers = () => (players.length = 0);

  const getActivePlayer = () => {
    return players.find((player) => player.getActiveStatus());
  };

  const switchActivePlayer = () => {
    players.forEach((player) => player.switchActiveStatus());
  };

  const playRound = (index) => {
    const activePlayer = getActivePlayer();
    board.addMarker(index, activePlayer);
    console.log(board.getField());
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
    players /* remove this */,
    getField: board.getField,
    addPlayers,
    emptyPlayers,
    switchActivePlayer /* delete? */,
    getActivePlayer,
    playRound,
  };
})();

export default GameController;
