var express = require("express");
var router = express.Router();
const appointmentController = require("../controllers/appointement.controller");

router.post("/addAppointement", appointmentController.bookingDateTime);
router.get("/getAllAppointements", appointmentController.getAllAppointements);
router.get(
  "/getAppointementByCustomerId/:customerId",
  appointmentController.getAppointementByCustomerId
);
module.exports = router;
