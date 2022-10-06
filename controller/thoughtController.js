const { Thought } = require("../models");

const thoughtController = {
	getAllThoughts(req, res) {
		Thought.find()
			.then(async (thought) => {
				const thoughtObj = {
					thought,
					// createdAt: await
				};
				return res.json(thoughtObj);
			})
			.catch((error) => {
				console.log(error);
			});
	},

	getThoughtById(req, res) {
		Thought.findOne({ _id: req.params.thoughtId })
			.select("-__v")
			.then(async (thought) => {
				if (!thought) {
					res.status(404).json({ message: "No thought with given ID" });
				} else {
					res.json(thought);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},

	createThought(req, res) {
		Thought.create(req.body)
			.then((thought) => res.json(thought))
			.catch((error) => res.status(500).json(error));
	},

	editThought(req, res) {
		console.log(req.body);
		Thought.findOneAndUpdate(
			{ _id: req.params.thoughtId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then(async (thought) => {
				if (!thought) {
					res.status(404).json({ message: "No thought with given ID" });
				} else {
					res.json(thought);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},

	deleteThought(req, res) {
		Thought.findOneAndDelete({ _id: req.params.thoughtId })
			.then(async (thought) => {
				if (!thought) {
					res.status(404).json({ message: "No thought with given ID" });
				} else {
					res.json(thought);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},
};

module.exports = thoughtController;
