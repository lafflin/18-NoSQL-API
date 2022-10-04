const router = require("express").Router();
const apiController = require("./api");

router.use("/api", apiController);
module.exports = router;
