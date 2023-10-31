const log = console.log;

import { createPlayer } from "./scripts/modules/CreatePlayer.js";
import { GameController } from "./scripts/modules/GameController.js";

const john = createPlayer("john");
const jane = createPlayer("jane");

log(GameController);
log(john);
log(GameController.gameState.getField());
log(GameController.addPlayer(john));
log(GameController);
