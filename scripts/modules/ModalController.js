const ModalController = (function () {
  const addUserBtn = document.querySelector("#add-user");
  const addUserModal = document.querySelector("#add-user-modal");
  const closeUserModalBtn = document.querySelector("#close-user-modal");
  const startNewGameBtns = document.querySelectorAll(".start-game");
  const choosePlayersModal = document.querySelector("#choose-players-modal");
  const closePlayersModalBtn = document.querySelector("#close-player-modal");
  const gameOverModal = document.querySelector("#game-over-modal");

  const showUserModal = () => addUserModal.showModal();

  const showGameOverModal = () => gameOverModal.showModal();

  const closeUserModal = () => addUserModal.close();

  const closePlayersModal = () => choosePlayersModal.close();

  addUserBtn.addEventListener("click", () => showUserModal());

  closeUserModalBtn.addEventListener("click", () => closeUserModal());

  closePlayersModalBtn.addEventListener("click", () => closePlayersModal());

  startNewGameBtns.forEach((btn) => {
    btn.addEventListener("click", () => choosePlayersModal.showModal());
  });

  return {
    closeUserModal,
    closePlayersModal,
    showGameOverModal,
  };
})();

export default ModalController;
