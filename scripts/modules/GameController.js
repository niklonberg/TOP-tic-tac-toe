import Gameboard from "./Gameboard.js";
import createPlayer from "./CreatePlayer.js";
import GameDisplayController from "./GameDisplayController.js";

const GameController = (function () {
  const board = Gameboard;
  const players = [];
  let tieCount = 0;

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

  const getTieCount = () => tieCount;

  const resetTieCount = () => (tieCount = 0);

  const incrementTieCount = () => ++tieCount;

  const playRound = (index) => {
    const activePlayer = getActivePlayer();
    board.addMarker(index, activePlayer);
    const winConditionMet = board.checkForWin(activePlayer);
    const tieConditionMet = board.checkForTie();

    if (tieConditionMet && !winConditionMet) {
      tieGame();
      return;
    }

    winConditionMet ? winGame(activePlayer) : switchActivePlayer();
  };

  const startGame = (chosenPlayers) => {
    board.resetField();
    resetTieCount();
    emptyPlayers();
    addPlayers(chosenPlayers);
    GameDisplayController.renderBoard();
    GameDisplayController.updateTurnDiv();
  };

  const winGame = (activePlayer) => {
    activePlayer.incrementScore();
    switchActivePlayer();
    board.resetField();
    GameDisplayController.showGameOverModal(activePlayer, players, true);
  };

  const tieGame = () => {
    incrementTieCount();
    switchActivePlayer();
    board.resetField();
    GameDisplayController.showGameOverModal(null, players, false);
  };

  return {
    getField: board.getField,
    resetField: board.resetField,
    getTieCount,
    getActivePlayer,
    playRound,
    startGame,
  };
})();

export default GameController;
