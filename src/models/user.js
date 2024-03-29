const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  email: { type: String, requied: true, unique: true },
  password: { type: String, requied: true },
  createdAt: { type: Date, default: Date.now },
});

// JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, "dshgshgdjhds54ft5f", {
    expiresIn: "1d",
  });
};

module.exports = mongoose.model("User", userSchema);
