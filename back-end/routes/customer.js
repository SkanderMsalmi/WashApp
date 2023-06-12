var express = require("express");
var router = express.Router();
const customerController = require("../controllers/customer.controller");

router.post("/addCustomer", customerController.addCustomer);
router.get("/getCustomer/:id", customerController.getCustomer);
router.get("/getAllCustomer", customerController.getAllCustomers);

module.exports = router;
