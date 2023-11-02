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

  const updateBoard = (element, marker) => {
    element.textContent = marker;
    playerTurnDiv.textContent = `It's ${game.getActivePlayer().name}'s turn!`;
  };

  const clickHandlerField = (event) => {
    const fieldIndex = event.target.dataset.index;
    const marker = game.getActivePlayer().getMarker();

    if (!fieldIndex) return;

    game.playRound(fieldIndex);
    updateBoard(event.target, marker);
  };

  gameContainer.addEventListener("click", clickHandlerField);

  return { createFieldItem, renderBoard, updateBoard };
})();

export default DisplayController;
