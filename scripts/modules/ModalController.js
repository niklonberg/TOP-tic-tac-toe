const ModalController = (function () {
  const addUserBtn = document.querySelector("#add-user");
  const addUserModal = document.querySelector("#add-user-modal");
  const userList = document.querySelector("#user-list");
  const closeUserModalBtn = document.querySelector("#close-user-modal");
  const startNewGameBtns = document.querySelectorAll(".start-game");
  const choosePlayersModal = document.querySelector("#choose-players-modal");
  const closePlayersModalBtn = document.querySelector("#close-player-modal");
  const gameOverModal = document.querySelector("#game-over-modal");

  const showUserModal = () => addUserModal.showModal();

  const closeUserModal = () => addUserModal.close();

  const closePlayersModal = () => choosePlayersModal.close();

  const showGameOverModal = () => gameOverModal.showModal();

  const closeGameOverModal = () => gameOverModal.close();

  addUserBtn.addEventListener("click", () => showUserModal());

  closeUserModalBtn.addEventListener("click", () => {
    closeUserModal();
    userList.classList.remove("show-users");
  });

  closePlayersModalBtn.addEventListener("click", () => closePlayersModal());

  startNewGameBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      choosePlayersModal.showModal();
      closeGameOverModal();
    });
  });

  return {
    closeUserModal,
    closePlayersModal,
    showGameOverModal,
    closeGameOverModal,
  };
})();

export default ModalController;
