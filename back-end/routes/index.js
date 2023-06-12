var express = require("express");
var router = express.Router();
const customer = require("./customer");

router.get("/", function (req, res, next) {
  res.end("index");
});
router.use("/api/customer", customer);

module.exports = router;
