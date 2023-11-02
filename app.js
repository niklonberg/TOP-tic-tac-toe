const log = console.log;

import createPlayer from "./scripts/modules/CreatePlayer.js";
import GameController from "./scripts/modules/GameController.js";

const john = createPlayer("john", "x", true);
const jane = createPlayer("jane", "o");

GameController.addPlayer(john);
GameController.addPlayer(jane);
GameController.board.getField();
log(`the active player is: `, GameController.getActivePlayer());
//john
GameController.playRound(0);
GameController.board.getField();
log(`the active player is: `, GameController.getActivePlayer());
GameController.playRound(2);
GameController.board.getField();
log(`the active player is: `, GameController.getActivePlayer());
//john
GameController.playRound(3);
GameController.board.getField();
log(`the active player is: `, GameController.getActivePlayer());
GameController.playRound(7);
GameController.board.getField();
log(`the active player is: `, GameController.getActivePlayer());
//john
GameController.playRound(6);
GameController.board.getField();
console.log(john.getScore());
