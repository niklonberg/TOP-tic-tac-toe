const log = console.log;

import createPlayer from "./scripts/modules/CreatePlayer.js";
import GameController from "./scripts/modules/GameController.js";

const john = createPlayer("john", "x");
const jane = createPlayer("jane", "o");
/* const jim = createPlayer("jim"); */

log(GameController);
log(john);
log(GameController.board.getField());
GameController.addPlayer(john);
GameController.addPlayer(jane);
GameController.board.addMarker(2, john);
log(GameController.board.getField());
GameController.board.addMarker(0, jane);
log(GameController.board.getField());
GameController.board.resetField();
log(GameController.board.getField());
log(GameController);
