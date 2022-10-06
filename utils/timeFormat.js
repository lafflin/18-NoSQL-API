var moment = require("moment");

function formattedTime(string) {
	const newTime = moment(string).format("MM-DD-YYYY");
	return newTime;
}

module.exports = formattedTime;
