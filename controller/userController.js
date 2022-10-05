const { User } = require("../models");

const userController = {
	getAllUsers(req, res) {
		User.find()
			.then(async (users) => {
				const usersObj = {
					users,
				};
				return res.json(usersObj);
			})
			.catch((error) => {
				console.log(error);
			});
	},

	getUserById(req, res) {
		User.findOne({ _id: req.params.userId })
			.select("-__v")
			.then(async (user) => {
				if (!user) {
					res.status(404).json({ message: "No user with given ID" });
				} else {
					res.json(user);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},

	createUser(req, res) {
		User.create(req.body)
			.then((user) => res.json(user))
			.catch((error) => res.status(500).json(error));
	},

	editUser(req, res) {
		console.log(req.body);
		User.findOneAndUpdate(
			{ _id: req.params.userId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then(async (user) => {
				if (!user) {
					res.status(404).json({ message: "No user with given ID" });
				} else {
					res.json(user);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},
	deleteUser(req, res) {
		User.findOneAndDelete({ _id: req.params.userId })
			.then(async (user) => {
				if (!user) {
					res.status(404).json({ message: "No user with given ID" });
				} else {
					res.json(user);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},
};

module.exports = userController;
