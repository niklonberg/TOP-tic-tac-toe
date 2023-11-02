import Gameboard from "./Gameboard.js";

const DisplayController = (function () {
  const gameField = Gameboard.getField();
  const gameContainer = document.querySelector("#game-board");
  const activePlayerMsgBox = document.querySelector("#active-player");

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

  return { createFieldItem, renderBoard, updateBoard };
})();

export default DisplayController;
