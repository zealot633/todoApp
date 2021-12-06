const { v4: uuidv4 } = require("uuid");
const fakeDB = require("../fakeDB");

class UsersService {
  users = fakeDB;

  addUser = (body) => this.users.push({ id: uuidv4(), ...body });

  getUserByID = (id) => this.users.find((user) => user.id === id);

  deleteUser = (id) =>
    (this.users = this.users.filter((user) => user.id !== id));

  updateUser(id, body) {
    let userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex >= 0) {
      this.users[userIndex] = { id, ...body };
    }
  }

  getUsers = () => this.users;
}

module.exports = UsersService;
