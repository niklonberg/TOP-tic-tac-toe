import GameController from "./GameController.js";

const GameDisplayController = (function () {
  const gameContainer = document.querySelector("#game-board");
  const playerTurnDiv = document.querySelector("#active-player");
  const gameOverModal = document.querySelector("#game-over-modal");
  const winningPlayerMsg = document.querySelector("#winning-player-msg");
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
    console.log("active player is: ", GameController.getActivePlayer());
    console.log("players are: ", GameController.players);
    const marker = GameController.getActivePlayer().getMarker();

    if (!fieldIndex) return;

    GameController.playRound(fieldIndex);
    updateBoard(event.target, marker);
  };

  const showGameOver = (activePlayer, players) => {
    winningPlayerMsg.textContent = `Congrats ${activePlayer.name}, they won!`;
    players.forEach((player) => {});
    gameOverModal.showModal();
  };

  gameContainer.addEventListener("click", clickHandlerField);

  return {
    renderBoard,
    updateBoard,
    updateTurnDiv,
    showGameOver,
  };
})();

export default GameDisplayController;
