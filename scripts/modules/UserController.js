const UserController = (function () {
  const users = [];

  const addUserBtn = document.querySelector("#add-user");
  const addUserModal = document.querySelector("#add-user-modal");
  const addUserForm = document.querySelector("#add-user-form");
  const userName = document.querySelector("#user-name");

  addUserBtn.addEventListener("click", () => {
    addUserModal.showModal();
  });

  addUserForm.addEventListener("submit", (event) => {
    event.preventDefault();
    users.push(userName.value);
    console.log(users);
  });
})();

export default UserController;
