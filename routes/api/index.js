const router = require("express").Router();
// const thoughts = require("./thoughts");
const users = require("./users");

router.use("/users", users);
// app.use("/thoughts", thoughts);
module.exports = router;
