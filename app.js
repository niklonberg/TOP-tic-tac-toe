const log = console.log;

import { createPlayer } from "./scripts/modules/CreatePlayer.js";
import { GameController } from "./scripts/modules/GameController.js";

const john = createPlayer("john");
const jane = createPlayer("jane");
const jim = createPlayer("jim");

log(GameController);
log(john);
log(GameController.board.getField());
log(GameController.addPlayer(john));
log(GameController.addPlayer(jane));
log(GameController.addPlayer(jim));
log(GameController);
