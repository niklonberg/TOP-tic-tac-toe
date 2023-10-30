const log = console.log;
import { Gameboard } from "./scripts/modules/Gameboard.js";
import { createPlayer } from "./scripts/modules/CreatePlayer.js";

const john = createPlayer("john");
const jane = createPlayer("jane");

log(Gameboard);
log(john);
log(jane);
