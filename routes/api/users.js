const router = require("express").Router();
// const { User } = require("../../models");
const {
	getAllUsers,
	getUserById,
	createUser,
	editUser,
	deleteUser,
	newFriend,
	deleteFriend,
} = require("../../controller/userController");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId").get(getUserById).put(editUser).delete(deleteUser);

router.route("/:userId/friends/:friendId").post(newFriend).delete(deleteFriend);

module.exports = router;
