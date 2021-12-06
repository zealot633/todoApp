const UsersController = require("../controllers/usersController");
const { Router } = require("@awaitjs/express");

const router = Router();
const usersController = new UsersController();

router.getAsync(
  "/users/:id",
  usersController.getUserByID.bind(usersController)
);
router.getAsync("/users/", usersController.getUsers.bind(usersController));
router.postAsync("/users/", usersController.addUser.bind(usersController));
router.putAsync("/users/:id", usersController.updateUser.bind(usersController));
router.deleteAsync(
  "/users/:id",
  usersController.deleteUser.bind(usersController)
);

module.exports = router;
