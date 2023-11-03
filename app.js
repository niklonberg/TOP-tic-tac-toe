const log = console.log;

import GameController from "./scripts/modules/GameController.js";
import DisplayController from "./scripts/modules/DisplayController.js";
import UserController from "./scripts/modules/UserController.js";

UserController.getStoredUsers();
UserController.populateUserLists();
console.log(UserController.getStoredUsers());

/* const john = createPlayer("john", "x", true);
const jane = createPlayer("jane", "o"); */

/* GameController.addPlayer(john);
GameController.addPlayer(jane); */

DisplayController.renderBoard();
