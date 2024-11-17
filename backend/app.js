require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

// enable cors and json parser
app.use(cors());
app.use(express.json());

const employeeRoutes = require("./routes/employees");
app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the testApp!");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is successfully listening at Port: ", PORT);
  } else {
    console.log("An error ocurred: ", error);
  }
});

main().catch((error) => {
  console.error(error);
});

async function main() {
  const connectionString = process.env.DB_CONNECT_STRING;
  await mongoose.connect(connectionString, { family: 4 });
  mongoose.set("strictQuery", true);
}
