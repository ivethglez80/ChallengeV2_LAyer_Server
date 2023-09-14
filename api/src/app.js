const express = require ("express");
const morgan = require ("morgan");

const emailRoute = require("../routes/sendEmailRoute");

const app = express();

app.use(morgan("dev"));

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, 
  optionSuccessStatus: 200,
};

app.use(cors()); 

app.use(express.json()); 

app.use("/email", emailRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = app
