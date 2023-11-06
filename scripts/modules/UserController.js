import GameController from "./GameController.js";
import GameDisplayController from "./GameDisplayController.js";
import ModalController from "./ModalController.js";

const UserController = (function () {
  /* add users references */
  const userList = document.querySelector("#user-list");

  const addUserForm = document.querySelector("#add-user-form");
  const userNameInput = document.querySelector("#user-name");

  /* choose players references */
  const choosePlayersForm = document.querySelector("#choose-players-form");
  const choosePlayersList = document.querySelector("#choose-players-list");

  let users = ["Player 1", "Player 2"];

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
    ModalController.closeUserModal();
  };

  addUserForm.addEventListener("submit", (event) => {
    clickAddUserFormSubmit(event);
  });

  /* choose players funcs & listeners */

  const clickChoosePlayersFormSubmit = (event) => {
    event.preventDefault();
    const chosenPlayers = [...choosePlayersList.selectedOptions].map(
      (option) => option.value
    );
    GameController.startGame(chosenPlayers);
    GameDisplayController.renderBoard();
    GameDisplayController.updateTurnDiv();
    ModalController.closePlayersModal();
  };

  const limitMaxPlayerSelection = () => {
    const selectedOptions = [...choosePlayersList.selectedOptions];
    if (selectedOptions.length > 2) selectedOptions.at(-1).selected = false;
  };

  choosePlayersForm.addEventListener("submit", (event) => {
    clickChoosePlayersFormSubmit(event);
  });

  choosePlayersList.addEventListener("change", limitMaxPlayerSelection);

  return { getStoredUsers, populateUserLists };
})();

export default UserController;
