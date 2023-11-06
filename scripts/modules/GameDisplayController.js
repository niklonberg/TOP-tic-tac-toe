import GameController from "./GameController.js";
import ModalController from "./ModalController.js";

const GameDisplayController = (function () {
  const gameContainer = document.querySelector("#game-board");
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
    GameController.getField().forEach((_, index) => {
      const btn = createFieldItem();
      btn.dataset.index = index;
      gameContainer.appendChild(btn);
    });
  };

  const updateBoard = (element, marker) => {
    element.textContent = marker;
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

  const updatePlayerDivs = (players) => {
    players.forEach((player, index) => {
      const playerDivToUpdate = index === 0 ? playerOneDiv : playerTwoDiv;
      playerDivToUpdate.innerHTML = `<h2>${player.name}</h2>
         <p>Score: ${player.getScore()}</p>
        `;
    });
  };

  const updateGameOverModal = (activePlayer, players) => {
    winningPlayerMsg.textContent = `Congrats ${activePlayer.name}, they won!`;
    updatePlayerDivs(players);
    ModalController.showGameOverModal();
  };

  gameContainer.addEventListener("click", clickHandlerField);

  return {
    renderBoard,
    updateBoard,
    updateTurnDiv,
    updateGameOverModal,
  };
})();

export default GameDisplayController;
