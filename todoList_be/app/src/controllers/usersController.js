import { UsersService } from "../services/usersService.js";
import { sendResponse } from "../utils/sendResponse.js";
import { STATUSES } from "../constants/responseStatuses.js";

export class UsersController {
  #storage = new UsersService();

  async getUserByID(req, res) {
    try {
      const data = await this.#storage.getUserByID(req.params.id);
      data
        ? sendResponse(res, STATUSES.ok, data)
        : sendResponse(
            res,
            STATUSES.notFound,
            "The user with the given id does not exist!"
          );
    } catch (e) {
      sendResponse(res, STATUSES.serverError, e.message);
    }
  }

  async addUser(req, res) {
    try {
      if (req.body.hasOwnProperty("name") && req.body.hasOwnProperty("text")) {
        this.#storage.addUser(req.body);
        sendResponse(res, STATUSES.created, this.#storage.getUsers());
      } else {
        sendResponse(res, STATUSES.badRequest, "Incorrect request");
      }
    } catch (e) {
      sendResponse(res, STATUSES.serverError, e.message);
    }
  }

  async deleteUser(req, res) {
    try {
      if (this.#storage.users.find((user) => user.id === req.params.id)) {
        this.#storage.deleteUser(req.params.id);
        sendResponse(res, STATUSES.ok, this.#storage.getUsers());
      } else {
        sendResponse(
          res,
          STATUSES.badRequest,
          "The user with the given id does not exist"
        );
      }
    } catch (e) {
      sendResponse(res, STATUSES.serverError, e.message);
    }
  }

  async getUsers(req, res) {
    const data = this.#storage.getUsers();
    data
      ? sendResponse(res, STATUSES.ok, data)
      : sendResponse(res, STATUSES.badRequest, "Users not found :(");
  }

  async updateUser(req, res) {
    const user = this.#storage.users.find((user) => user.id === req.params.id);
    if (user) {
      this.#storage.updateUser(req.params.id, req.body);
      sendResponse(res, STATUSES.ok, this.#storage.getUsers());
    } else {
      sendResponse(res, STATUSES.badRequest, "Incorrect id");
    }
  }
}
