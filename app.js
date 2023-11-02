const log = console.log;

import createPlayer from "./scripts/modules/CreatePlayer.js";
import GameController from "./scripts/modules/GameController.js";
import DisplayController from "./scripts/modules/DisplayController.js";

const john = createPlayer("john", "x", true);
const jane = createPlayer("jane", "o");

DisplayController.renderBoard();

GameController.addPlayer(john);
GameController.addPlayer(jane);
/* GameController.getField();
log(`the active player is: `, GameController.getActivePlayer());
//john
GameController.playRound(0);
GameController.getField();
log(`the active player is: `, GameController.getActivePlayer());
GameController.playRound(2);
GameController.getField();
log(`the active player is: `, GameController.getActivePlayer());
//john
GameController.playRound(3);
GameController.getField();
log(`the active player is: `, GameController.getActivePlayer());
GameController.playRound(7);
GameController.getField();
log(`the active player is: `, GameController.getActivePlayer());
//john
GameController.playRound(6);
GameController.getField();
console.log(john.getScore()); */
