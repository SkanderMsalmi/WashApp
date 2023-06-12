const Appointement = require("../models/appointement.model");
const Customer = require("../models/customer.model");

exports.bookingDateTime = async (req, res, next) => {
  try {
    const { customerID, bookingdateTime } = req.body;
    const customer = await Customer.findById(customerID);
    console.log(customer);
    if (!customer) {
      return res.status(404).json("Customer Not Found");
    } else {
      const appointement = new Appointement({
        customerID,
        appointmentDate: bookingdateTime,
      });
      await appointement.save();
      return res.status(201).json(appointement);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

exports.getAllAppointements = async (req, res, next) => {
  try {
    const appointements = await Appointement.find();
    return res.status(200).json(appointements);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};

exports.getAppointementByCustomerId = async (req, res, next) => {
  try {
    const appointements = await Appointement.find({
      customerID: req.params.customerId,
    });
    return res.status(200).json(appointements);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
