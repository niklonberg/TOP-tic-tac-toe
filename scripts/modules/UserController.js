const UserController = (function () {
  const users = [];

  const userList = document.querySelector("#user-list");
  const addUserBtn = document.querySelector("#add-user");
  const addUserModal = document.querySelector("#add-user-modal");
  const addUserForm = document.querySelector("#add-user-form");
  const userNameInput = document.querySelector("#user-name");
  const closeUserModalBtn = document.querySelector("#close-user-modal");

  const clickFormSubmit = (event) => {
    event.preventDefault();
    users.push(userNameInput.value);
    userNameInput.value = "";
    addUserModal.close();
    /* addLatestUser(); */
  };

  const populateUserList = () => {
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user;
      userList.appendChild(li);
    });
  };

  addUserBtn.addEventListener("click", () => addUserModal.showModal());

  closeUserModalBtn.addEventListener("click", () => addUserModal.close());

  addUserForm.addEventListener("submit", (event) => clickFormSubmit(event));
})();

export default UserController;
