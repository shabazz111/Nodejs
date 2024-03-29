const adminUser = require("../models/admin-user");
const { resp } = require("../utils/respUtil");

exports.createAdminUser = async (req, res) => {
  try {
    const { firstname, lastname, mobile, email } = req.body;
    const newAdminUser = await adminUser.create({
      firstname,
      lastname,
      mobile,
      email,
    });
    res.status(200).json({
      user: newAdminUser,
      success: true,
      message: "User added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
};

exports.getAllAdminUsers = async (req, res) => {
  const allUserList = await adminUser.find();
  res.status(200).json({
    message: "User listed Succesfully",
    allUserList,
  });
};

exports.editUser = async (req, res) => {
  try {
    //data took from body
    const { firstname, lastname, mobile } = req.body;
    // id took from params to get the user
    const { id } = req.params;
    // updated the user with id and nwe Data
    await adminUser.findByIdAndUpdate(id, { firstname, lastname, mobile });
    // fetch the user again to get updated user
    const user = await adminUser.findById(id);
    resp(res, 200, "User Updated Succesfully", user);
  } catch (error) {
    resp(res, 500, error?.message, {});
  }
};

// Delete //

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await adminUser.findByIdAndDelete(id);
    resp(res, 200, "User Deleted Succesfully", {});
  } catch (error) {
    resp(res, 500, error?.message, {});
  }
};

// Search By Id //

exports.searchById = async (req, res) => {
  try {
    // const { id } = req.params;
    // const user = await adminUser.findById(id);
    const { searchterm } = req.params; // Extract the search term from request body

    // Construct a regex pattern to match firstname, lastname, mobile, or email
    const searchPattern = new RegExp(searchterm, 'i'); // 'i' flag for case-insensitive search

    // Search for the user in the database where any of the fields match the search term
    const users = await adminUser.find({
      $or: [
        { firstname: searchPattern },
        { lastname: searchPattern },
        { mobile: searchPattern },
        { email: searchPattern }
      ]
    });

    resp(res, 200, "User Found Succesfully", users);
  } catch (error) {
    resp(res, 500, error?.message, {});
  }
};
