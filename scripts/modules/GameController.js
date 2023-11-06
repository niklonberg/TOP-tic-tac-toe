import Gameboard from "./Gameboard.js";
import createPlayer from "./CreatePlayer.js";
import GameDisplayController from "./GameDisplayController.js";

const GameController = (function () {
  const board = Gameboard;
  const players = [];

  const getPlayers = () => {
    return players;
  };

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
    emptyPlayers();
    addPlayers(chosenPlayers);
  };

  const endGame = (activePlayer) => {
    activePlayer.incrementScore();
    GameDisplayController.showGameOver(activePlayer, players);
    /* players.forEach((player) => {
      console.log(player.getScore());
    }); */

    /* play again? button */
    /* if so, resetField() */
    /* empty players array */
    /* startGame() */
  };

  return {
    getField: board.getField,
    getPlayers,
    addPlayers,
    emptyPlayers,
    switchActivePlayer /* delete? */,
    getActivePlayer,
    playRound,
    startGame,
  };
})();

export default GameController;
