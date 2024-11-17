const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// GET: list
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "An error ocurred", error: error });
  }
});

// GET: get by id
router.get("/", async (req, res) => {
  try {
    const id = req.params.id;
    const employees = await Employee.findOne({ _id: id });
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: "An error ocurred", error: error });
  }
});

// POST: create
router.post("/", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const savedEmployee = employee.save();
    res.status(200).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ message: "An error ocurred", error: error });
  }
});

// PUT: update
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const employee = req.body;
    const updatedEmployee = await Employee.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: employee,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res
      .status(500)
      .json({ message: `An error ocurred: ${req.body.json}`, error: error });
  }
});

// DELETE: delete
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedEmployee = await Employee.deleteOne({ _id: id });
    res.status(200).json(deletedEmployee);
  } catch (error) {
    res.status(500).json({ message: "An error ocurred", error: error });
  }
});

module.exports = router;
