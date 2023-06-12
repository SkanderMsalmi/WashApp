const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  customerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
