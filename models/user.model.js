const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: false,
    },
    email: {
      type: String,
      unique: true,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    postalCode: {
      type: Number,
      required: false,
    },
    mobile: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
