import GameController from "./GameController.js";
import DisplayController from "./DisplayController.js";

const UserController = (function () {
  /* add users references */
  const userList = document.querySelector("#user-list");
  const addUserBtn = document.querySelector("#add-user");
  const addUserModal = document.querySelector("#add-user-modal");
  const addUserForm = document.querySelector("#add-user-form");
  const userNameInput = document.querySelector("#user-name");
  const closeUserModalBtn = document.querySelector("#close-user-modal");
  /* choose players references */
  const startNewGameBtn = document.querySelector("#start-game");
  const choosePlayersModal = document.querySelector("#choose-players-modal");
  const choosePlayersForm = document.querySelector("#choose-players-form");
  const choosePlayersList = document.querySelector("#choose-players-list");
  const closePlayerModal = document.querySelector("#close-player-modal");

  let users = [];

  /* add users funcs & listeners */
  const getStoredUsers = () => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) users = JSON.parse(storedUsers);
  };

  const addLatestUser = (user) => {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    renderLatestUserItem(user);
  };

  const populateUserLists = () => {
    userList.innerHTML = "";
    choosePlayersList.innerHTML = "";
    users.forEach((user) => renderLatestUserItem(user));
  };

  const renderLatestUserItem = (user) => {
    /* user */
    const li = document.createElement("li");
    li.textContent = user;
    userList.appendChild(li);
    /* player option */
    const option = document.createElement("option");
    option.value = user;
    option.textContent = user;
    choosePlayersList.appendChild(option);
  };

  const clickAddUserFormSubmit = (event) => {
    event.preventDefault();
    addLatestUser(userNameInput.value);
    userNameInput.value = "";
    addUserModal.close();
  };

  addUserForm.addEventListener("submit", (event) => {
    clickAddUserFormSubmit(event);
  });

  addUserBtn.addEventListener("click", () => addUserModal.showModal());

  closeUserModalBtn.addEventListener("click", () => addUserModal.close());

  /* choose players funcs & listeners */

  const clickChoosePlayersFormSubmit = (event) => {
    event.preventDefault();
    const chosenPlayers = [...choosePlayersList.selectedOptions].map(
      (option) => option.value
    );
    GameController.emptyPlayers();
    GameController.addPlayers(chosenPlayers);
    /* tell DisplayController to show the game board */
    choosePlayersModal.close();
  };

  const limitMaxPlayerSelection = () => {
    const selectedOptions = [...choosePlayersList.selectedOptions];
    if (selectedOptions.length > 2) {
      selectedOptions.at(-1).selected = false;
    }
  };

  choosePlayersForm.addEventListener("submit", (event) => {
    clickChoosePlayersFormSubmit(event);
  });

  choosePlayersList.addEventListener("change", limitMaxPlayerSelection);

  startNewGameBtn.addEventListener("click", () =>
    choosePlayersModal.showModal()
  );

  closePlayerModal.addEventListener("click", () => choosePlayersModal.close());

  return { getStoredUsers, populateUserLists };
})();

export default UserController;
