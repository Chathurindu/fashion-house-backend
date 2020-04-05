const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // help to connect mongo DB database

require("dotenv").config(); // envirenment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // cors middleware
app.use(express.json()); // allow to pass json

const uri = process.env.ATLAS_URI; // database URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const conn = mongoose.connection; // mongoose connection
conn.once("open", () => {
  console.log("*** MongoDB database connected successfully");
});

const userRouter = require("./routes/user.route");
app.use("/users", userRouter);

// run the server on port 5000
app.listen(port, () => {
  console.log(`*** Server is running on port : ${port}`);
});
