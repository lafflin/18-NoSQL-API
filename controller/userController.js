const { User } = require("../models");

const userController = {
	getAllUsers(req, res) {
		User.find({})
			.populate({
				path: "thoughts",
				select: "-__v",
			})
			.populate({
				path: "friends",
				select: "-__v",
			})
			.select("-__v")
			.sort({ _id: -1 })
			.catch((error) => {
				console.log(error);
			});
	},

	getUserById({ params }, res) {
		User.findOne({ _id: params.id })
			.populate({
				path: "thoughts",
				select: "-__v",
			})
			.populate({
				path: "friends",
				select: "-__v",
			})
			.then((dbUserData) => {
				if (!dbUserData) {
					res.status(404).json({ message: "No User with this ID was found" });
					return;
				}
				res.json(dbUserData);
			})
			.catch((error) => {
				console.log(error);
			});
	},

	createUser(body, res) {
		console.log("inside of createUser", body);
		console.log("inside of createUser (destructured)", { body });

		User.create(body).catch((error) => {
			console.log(error);
		});
	},
};

module.exports = userController;
