const log = console.log;

import createPlayer from "./scripts/modules/CreatePlayer.js";
import GameController from "./scripts/modules/GameController.js";

const john = createPlayer("john", "x", true);
const jane = createPlayer("jane", "o");

log(GameController);
GameController.addPlayer(john);
GameController.addPlayer(jane);
log(GameController.getActivePlayer());
log(GameController);
