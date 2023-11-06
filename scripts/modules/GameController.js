import Gameboard from "./Gameboard.js";
import createPlayer from "./CreatePlayer.js";
import GameDisplayController from "./GameDisplayController.js";

const GameController = (function () {
  const board = Gameboard;
  const players = [];

  const addPlayers = (chosenPlayers) => {
    chosenPlayers.forEach((player, index) => {
      const marker = index !== 1 ? "x" : "o";
      const active = index !== 1;
      const newPlayerObj = createPlayer(player, marker, active);
      players.push(newPlayerObj);
      console.log(players);
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

  const startGame = (chosenPlayers) => {
    emptyPlayers(); /* should not be be here */
    addPlayers(chosenPlayers);
    GameDisplayController.renderBoard();
    GameDisplayController.updateTurnDiv();
  };

  const endGame = (activePlayer) => {
    activePlayer.incrementScore();
    GameDisplayController.updateGameOverModal(activePlayer, players);

    /* if so, resetField() */
    /* empty players array */
    /* startGame() */
  };

  return {
    getField: board.getField,
    emptyPlayers,
    getActivePlayer,
    playRound,
    startGame,
  };
})();

export default GameController;
