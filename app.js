const log = console.log;

import createPlayer from "./scripts/modules/CreatePlayer.js";
import GameController from "./scripts/modules/GameController.js";

const john = createPlayer("john", "x", true);
const jane = createPlayer("jane", "o");

log(GameController);
GameController.addPlayer(john);
GameController.addPlayer(jane);
GameController.board.addMarker(1, john);
/* GameController.board.addMarker(1, getActivePlayer()); */
GameController.switchActivePlayer();
log(GameController.board.getField());
GameController.board.resetField();
log(GameController.board.getField());
log(GameController);
