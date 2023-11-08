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
    const tieConditionMet = board.checkForTie();

    if (tieConditionMet && !winConditionMet) {
      tieGame();
      return;
    }

    winConditionMet
      ? (console.log("game is over!"), winGame(activePlayer))
      : switchActivePlayer();
  };

  const startGame = (chosenPlayers) => {
    board.resetField();
    emptyPlayers();
    addPlayers(chosenPlayers);
    GameDisplayController.renderBoard();
    GameDisplayController.updateTurnDiv();
  };

  const winGame = (activePlayer) => {
    activePlayer.incrementScore();
    board.resetField();
    GameDisplayController.showGameOverModal(activePlayer, players, true);
  };

  const tieGame = () => {
    board.resetField();
    GameDisplayController.showGameOverModal(null, players, false);
  };

  return {
    getField: board.getField,
    resetField: board.resetField,
    getActivePlayer,
    playRound,
    startGame,
  };
})();

export default GameController;
