const router = require("express").Router();
// const { User } = require("../../models");
const {
	getAllUsers,
	getUserById,
	createUser,
} = require("../../controller/userController");

router.get("/", (req, res) => {
	getAllUsers();
});

router.get("/:id", (req, res) => {
	getUserById();
});

router.post("/", (req, res) => {
	createUser(req.body);
});

router.put("/:id");

router.delete("/:id");

module.exports = router;
