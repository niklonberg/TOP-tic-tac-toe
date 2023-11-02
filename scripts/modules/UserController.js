const UserController = (function () {
  const userList = document.querySelector("#user-list");
  const addUserBtn = document.querySelector("#add-user");
  const addUserModal = document.querySelector("#add-user-modal");
  const addUserForm = document.querySelector("#add-user-form");
  const userNameInput = document.querySelector("#user-name");
  const closeUserModalBtn = document.querySelector("#close-user-modal");

  let users = [];

  const getStoredUsers = () => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) users = JSON.parse(storedUsers);
  };

  const addLatestUser = (user) => {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    renderLatestUserItem(user);
  };

  const populateUserList = () => {
    userList.innerHTML = "";
    users.forEach((user) => renderLatestUserItem(user));
  };

  const renderLatestUserItem = (newUser) => {
    const li = document.createElement("li");
    li.textContent = newUser;
    userList.appendChild(li);
  };

  const clickFormSubmit = (event) => {
    event.preventDefault();
    addLatestUser(userNameInput.value);
    userNameInput.value = "";
    addUserModal.close();
  };

  addUserBtn.addEventListener("click", () => addUserModal.showModal());

  closeUserModalBtn.addEventListener("click", () => addUserModal.close());

  addUserForm.addEventListener("submit", (event) => clickFormSubmit(event));

  return { getStoredUsers, populateUserList };
})();

export default UserController;
