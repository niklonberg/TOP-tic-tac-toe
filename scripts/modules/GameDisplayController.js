import GameController from "./GameController.js";
import ModalController from "./ModalController.js";

const GameDisplayController = (function () {
  const gameBoard = document.querySelector("#game-board");
  const playerTurnDiv = document.querySelector("#active-player");
  const winningPlayerMsg = document.querySelector("#winning-player-msg");
  const playerOneDiv = document.querySelector("#player-one");
  const playerTwoDiv = document.querySelector("#player-two");
  const playAgainBtn = document.querySelector("#play-again");

  const createFieldItem = () => {
    const btn = document.createElement("button");
    /* add class, id etc. */
    return btn;
  };

  const renderBoard = () => {
    gameBoard.innerHTML = "";
    GameController.getField().forEach((_, index) => {
      const btn = createFieldItem();
      btn.dataset.index = index;
      gameBoard.appendChild(btn);
    });
  };

  const updateBoard = (element, marker) => {
    const classToAdd = marker === "x" ? "cross" : "circle";
    element.classList.add("marked", classToAdd);
    updateTurnDiv();
  };

  const updateTurnDiv = () => {
    playerTurnDiv.textContent = `It's ${
      GameController.getActivePlayer().name
    }'s turn!`;
  };

  const clickHandlerField = (event) => {
    const fieldIndex = event.target.dataset.index;
    const marker = GameController.getActivePlayer().getMarker();

    if (!fieldIndex) return;

    GameController.playRound(fieldIndex);
    updateBoard(event.target, marker);
  };

  const hoverPreviewFieldMarker = (event) => {
    if (event.target.tagName === "BUTTON") {
      const field = event.target;
      const marker = GameController.getActivePlayer().getMarker();
    }
  };

  const updatePlayerDivs = (players) => {
    players.forEach((player, index) => {
      const playerDivToUpdate = index === 0 ? playerOneDiv : playerTwoDiv;
      playerDivToUpdate.innerHTML = `<h2>${player.name}</h2>
         <p>Score: ${player.getScore()}</p>
        `;
    });
  };

  const playAgain = () => {
    ModalController.closeGameOverModal();
    GameController.resetField();
    renderBoard();
  };

  const updateGameOverModal = (activePlayer, players) => {
    winningPlayerMsg.textContent = `Congrats ${activePlayer.name}, they won!`;
    updatePlayerDivs(players);
    ModalController.showGameOverModal();
  };

  gameBoard.addEventListener("click", clickHandlerField);

  gameBoard.addEventListener("mouseover", hoverPreviewFieldMarker);

  playAgainBtn.addEventListener("click", playAgain);

  return {
    renderBoard,
    updateBoard,
    updateTurnDiv,
    updateGameOverModal,
  };
})();

export default GameDisplayController;
