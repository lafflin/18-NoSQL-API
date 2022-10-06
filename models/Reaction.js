const { Schema, Types } = require("mongoose");
const formattedTime = require("../utils/timeFormat");

const ReactionSchema = new Schema(
	{
		reactionId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
		},
		reactionContent: {
			type: String,
			required: "Must enter a reaction to the thought",
			minlength: 1,
			maxlength: 280,
			trim: true,
		},
		username: {
			type: String,
			required: "You must enter a username to post a reaction",
		},
		createdAt: {
			type: Date,
			default: Date.now,
			// double check formatting
			get: (createdAtVal) => formattedTime(createdAtVal),
		},
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

const Reaction = ReactionSchema;

module.exports = Reaction;
