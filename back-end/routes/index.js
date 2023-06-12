var express = require("express");
var router = express.Router();
const customer = require("./customer");
const appointement = require("./appointement");

router.get("/", function (req, res, next) {
  res.end("index");
});
router.use("/api/customer", customer);
router.use("/api/appointement", appointement);

module.exports = router;
