const User = require("../models/user");
const { resp } = require("../utils/respUtil");
const sendToken = require("../utils/sendToken");
const jwt = require("jsonwebtoken");

exports.signUpUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Please fill all the fields");
    }
    const user = await User.create({ email, password });
    sendToken(user, 201, res);
  } catch (error) {
    resp(res, 500, error?.message, error);
  }
};
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("PLease fill all the fields");
    }
    const user = await User.findOne({ email, password });
    if (!user) {
      throw new Error("User not found");
    }

    sendToken(user, 201, res);
  } catch (error) {
    resp(res, 500, error?.message, error);
  }
};

exports.fetchMe = async (req, res) => {
  try {
    const { token } = req.headers;

    if (!token) {
      throw new Error("NO token available");
    }

    const decodedData = jwt.verify(token, "dshgshgdjhds54ft5f");

    console.log(decodedData);
    const user = await User.findById(decodedData.id);
    if (!user) {
      throw new Error("No user Found");
    }

    resp(res, 200, "User found", user);
  } catch (error) {
    resp(res, 500, error?.message, error);
  }
};
