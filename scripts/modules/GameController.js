import { Gameboard } from "./Gameboard.js";

export const GameController = (function () {
  const gameState = Gameboard;
  const players = {};

  const addPlayer = (player) => {
    players[player.name] = player;
  };

  return { gameState, players, addPlayer };
})();
