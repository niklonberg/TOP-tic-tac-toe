import GameController from "./GameController.js";

const DisplayController = (function () {
  const game = GameController;
  const gameField = game.getField();
  const gameContainer = document.querySelector("#game-board");
  const playerTurnDiv = document.querySelector("#active-player");

  const createFieldItem = () => {
    const btn = document.createElement("button");
    /* add class, id etc. */
    btn.textContent = "click"; /* placeholder text */
    return btn;
  };

  const renderBoard = () => {
    gameField.forEach((_, index) => {
      const btn = createFieldItem();
      btn.dataset.index = index;
      gameContainer.appendChild(btn);
    });
  };

  const updateBoard = () => {};

  const clickHandlerField = (event) => {
    console.log(event.target);
  };

  gameContainer.addEventListener("click", clickHandlerField);

  return { createFieldItem, renderBoard, updateBoard };
})();

export default DisplayController;
