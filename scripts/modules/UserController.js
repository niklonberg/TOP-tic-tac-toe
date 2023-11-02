const UserController = (function () {
  const users = [];

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
    console.log(users);
  };

  addUserBtn.addEventListener("click", () => addUserModal.showModal());

  closeUserModalBtn.addEventListener("click", () => addUserModal.close());

  addUserForm.addEventListener("submit", (event) => clickFormSubmit(event));
})();

export default UserController;
