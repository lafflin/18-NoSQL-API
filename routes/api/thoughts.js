const router = require("express").Router();

const {
	getAllThoughts,
	getThoughtById,
	createThought,
	editThought,
	deleteThought,
	newReaction,
	deleteReaction,
} = require("../../controller/thoughtController");

router.route("/").get(getAllThoughts).post(createThought);

router
	.route("/:thoughtId")
	.get(getThoughtById)
	.put(editThought)
	.delete(deleteThought);

router.route("/:thoughtId/reactions").post(newReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
