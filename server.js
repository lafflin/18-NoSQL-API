const db = require("./config/connection");
const express = require("express");
const routes = require("./controllers");
const mongoose = require("mongoose");

mongoose.set("debug", true);
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

db.once("open", async () => {
	app.listen(PORT, () => {
		console.log(`Server online at port ${PORT}`);
	});
});
