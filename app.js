const log = console.log;

import createPlayer from "./scripts/modules/CreatePlayer.js";
import GameController from "./scripts/modules/GameController.js";

const john = createPlayer("john", "x", true);
const jane = createPlayer("jane", "o");

log(GameController);
GameController.addPlayer(john);
GameController.addPlayer(jane);
GameController.board.getField();
log(`the active player is: `, GameController.getActivePlayer());
GameController.playRound(1);
GameController.board.getField();
log(`the active player is: `, GameController.getActivePlayer());
GameController.playRound(5);
GameController.board.getField();
log(`the active player is: `, GameController.getActivePlayer());
GameController.playRound(3);
GameController.board.getField();
