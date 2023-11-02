const log = console.log;

import createPlayer from "./scripts/modules/CreatePlayer.js";
import GameController from "./scripts/modules/GameController.js";
import DisplayController from "./scripts/modules/DisplayController.js";
import UserController from "./scripts/modules/UserController.js";

const john = createPlayer("john", "x", true);
const jane = createPlayer("jane", "o");

DisplayController.renderBoard();

GameController.addPlayer(john);
GameController.addPlayer(jane);
