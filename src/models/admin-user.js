const mongoose = require("mongoose");
const { number } = require("yup");

const adminUserSchema = new mongoose.Schema({
  firstname: { type: String, requied: true },
  lastname: { type: String, requied: true },
  mobile: { type: String, requied: true, },
  email: { type: String, requied: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("adminUser", adminUserSchema);
