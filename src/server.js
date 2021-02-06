const express = require("express");
const connectDB = require("../config/db");
const colors = require("colors");
const cors = require("cors");
const config = require("../config/config");

const app = express();

const PORT = config.PORT;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Nodemon");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.blue);
});
