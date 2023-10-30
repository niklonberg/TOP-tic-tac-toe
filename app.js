const log = console.log;
import { Gameboard } from "./scripts/modules/Gameboard.js";
import { createPlayer } from "./scripts/modules/CreatePlayer.js";
import { GameController } from "./scripts/modules/GameController.js";

const john = createPlayer("john");
const jane = createPlayer("jane");

log(Gameboard);
log(Gameboard.getField());
log(john);
log(john.getScore());
log(john.incrementScore());
log(john.incrementScore());
log(john.getScore());
/* log(GameController); */
