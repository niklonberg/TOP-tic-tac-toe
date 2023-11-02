const UserController = (function () {
  const users = [];

  const addUserBtn = document.querySelector("#add-user");
  const addUserModal = document.querySelector("#add-user-modal");
  const addUserForm = document.querySelector("#add-user-form");
  const userNameInput = document.querySelector("#user-name");

  const clickFormSubmit = (event) => {
    event.preventDefault();
    users.push(userNameInput.value);
    userNameInput.value = "";
    addUserModal.close();
    console.log(users);
  };

  addUserBtn.addEventListener("click", () => addUserModal.showModal());

  addUserForm.addEventListener("submit", (event) => clickFormSubmit(event));
})();

export default UserController;
