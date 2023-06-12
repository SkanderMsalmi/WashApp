const Appointement = require("../models/appointement.model");
const Customer = require("../models/customer.model");

exports.addCustomer = async (req, res, next) => {
  try {
    const customer = new Customer({
      username: req.body.username,
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    await customer.save();
    return res.status(201).send(customer);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};

exports.getCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (customer) {
      return res.status(200).send(customer);
    } else {
      return res.status(404).send("customer not found");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
exports.getAllCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    console.log(customers);
    return res.status(200).send(customers);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
};
