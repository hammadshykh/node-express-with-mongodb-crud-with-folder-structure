const express = require("express");
const app = express();
// const fs = require("fs");
require("dotenv").config(); //ENV =>SMTP=>PORT
const cors = require("cors");
const userRouter = require("./Routes/user");
const { connectMongoDb } = require("./Connection");
const port = 5000;

// connection

const dbUrl = process.env.ConnectString;

connectMongoDb(dbUrl)
  .then(() => console.log("CONNECTED MONGODB!"))
  .catch(() => console.log("not connected"));

app.use(express.urlencoded({ extended: false }));
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Route

app.use("/api/users", userRouter);

app.listen(port, () => console.log("started server!"));
