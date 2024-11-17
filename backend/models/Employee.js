const mongoose = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

const Employee = mongoose.model("employees", EmployeeSchema);

module.exports = Employee;
