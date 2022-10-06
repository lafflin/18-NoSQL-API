const { Schema, model } = require("mongoose");
const formattedTime = require("../utils/timeFormat");
const reactionSchema = require("./Reaction");

const ThoughtSchema = new Schema(
	{
		thoughtContent: {
			type: String,
			required: "No thoughts??",
			minlength: 1,
			maxlength: 280,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			// double check formatting
			get: (createdAtVal) => formattedTime(createdAtVal),
		},
		username: {
			type: String,
			required: "You need a username to post a thought",
		},
		reactions: [reactionSchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
	}
);

ThoughtSchema.virtual("reactionCount").get(function () {
	return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
