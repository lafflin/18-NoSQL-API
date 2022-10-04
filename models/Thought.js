const { Schema, model } = require("mongoose");
var moment = require("moment");

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
			get: (createdAtVal) => createdAtVal.moment().format("MM DD YYYY"),
		},
	},
	{
		toJSON: {
			getters: true,
		},
	}
);

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
			get: (createdAtVal) => createdAtVal.moment().format("MM DD YYYY"),
		},
		username: {
			type: String,
			required: "You need a username to post a thought",
		},
		reactions: [ReactionSchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},

		id: false,
	}
);

ThoughtSchema.virtual("reactionCount").get(function () {
	return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
