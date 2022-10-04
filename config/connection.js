const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/HW18_NoSQL");

module.exports = mongoose.connection;
