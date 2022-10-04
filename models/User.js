const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

const UserSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			required: "Username is required",
			trim: true,
		},
		// double check matching
		email: {
			type: String,
			unique: true,
			required: true,
			match: [/.+\@.+\..+/, "Please enter a valid Email"],
		},
		// double check reference
		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: "Thought",
			},
		],
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

UserSchema.virtual("friendsCount").get(function () {
	return this.friends.length;
});

// UserSchema.pre("remove", function (next) {
// 	Thought.remove({ username: this.username }).exec();
// 	next();
// });

const User = model("User", UserSchema);

module.exports = User;
