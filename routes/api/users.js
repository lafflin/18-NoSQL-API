const router = require("express").Router();
// const { User } = require("../../models");
const {
	getAllUsers,
	getUserById,
	createUser,
	editUser,
	deleteUser,
} = require("../../controller/userController");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId").get(getUserById).put(editUser).delete(deleteUser);

module.exports = router;
