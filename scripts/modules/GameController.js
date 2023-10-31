import { Gameboard } from "./Gameboard.js";

export const GameController = (function () {
  const board = Gameboard;
  const players = {};

  const addPlayer = (player) => {
    if (Object.keys(players).length < 2) {
      players[player.name] = player;
    } else {
      throw new Error("Player count limit reached");
    }
  };

  return { board, players, addPlayer };
})();
