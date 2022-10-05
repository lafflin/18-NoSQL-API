const router = require("express").Router();
// const { User } = require("../../models");
const {
	getAllUsers,
	getUserById,
	createUser,
} = require("../../controller/userController");

router.get("/", async (req, res) => {
	try {
		// not sure if i need to pass something into the func to make it work
		getAllUsers();
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.get("/:id", (req, res) => {
	getUserById();
});

router.post("/", (req, res) => {
	try {
		createUser(req.body);
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.put("/:id");

router.delete("/:id");

module.exports = router;
