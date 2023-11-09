import GameController from "./GameController.js";
import ModalController from "./ModalController.js";

const GameDisplayController = (function () {
  const gameBoard = document.querySelector("#game-board");
  const playerTurnDiv = document.querySelector("#active-player");
  const gameOverMsg = document.querySelector("#game-over-msg");
  const playerOneDiv = document.querySelector("#player-one");
  const playerTwoDiv = document.querySelector("#player-two");
  const tieCountDiv = document.querySelector("#tie-count");
  const playAgainBtn = document.querySelector("#play-again");

  const createFieldItem = () => {
    return document.createElement("button");
  };

  const renderBoard = () => {
    gameBoard.innerHTML = "";
    GameController.getField().forEach((_, index) => {
      const btn = createFieldItem();
      btn.dataset.index = index;
      addHoverPreviewMarkerListeners(btn);
      gameBoard.appendChild(btn);
    });
  };

  const updateBoard = (element, marker) => {
    const classToAdd = marker === "x" ? "cross" : "circle";
    element.className = "";
    element.classList.add("marked", classToAdd);
    updateTurnDiv();
  };

  const updateTurnDiv = () => {
    playerTurnDiv.textContent = `It's ${
      GameController.getActivePlayer().name
    }'s turn!`;
  };

  const updateTieDiv = () => {
    tieCountDiv.innerHTML = `<h2>Ties</h2>
    <p>Count: ${GameController.getTieCount()}</p>
    `;
  };

  const clickHandlerField = (event) => {
    const fieldIndex = event.target.dataset.index;
    const marker = GameController.getActivePlayer().getMarker();

    if (!fieldIndex) return;

    GameController.playRound(fieldIndex);
    updateBoard(event.target, marker);
  };

  const addHoverPreviewMarkerListeners = (btn) => {
    btn.addEventListener("mouseover", () => {
      if (!btn.classList.contains("marked")) {
        btn.classList.add(
          `${GameController.getActivePlayer().getMarker()}-outline`
        );
      }
    });

    btn.addEventListener("mouseout", () => {
      btn.classList.remove(
        `${GameController.getActivePlayer().getMarker()}-outline`
      );
    });
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

  const showGameOverModal = (activePlayer, players, isWin) => {
    if (isWin) {
      gameOverMsg.textContent = `Congrats ${activePlayer.name}, you won!`;
      updatePlayerDivs(players);
    } else {
      gameOverMsg.textContent = "It's a tie!";
      updateTieDiv();
    }
    ModalController.showGameOverModal();
  };

  gameBoard.addEventListener("click", clickHandlerField);

  playAgainBtn.addEventListener("click", playAgain);

  return {
    renderBoard,
    updateBoard,
    updateTurnDiv,
    showGameOverModal,
  };
})();

export default GameDisplayController;
