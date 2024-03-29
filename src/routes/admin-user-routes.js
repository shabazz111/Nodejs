const express = require("express");
const router = express.Router();
const {
  createAdminUser,
  getAllAdminUsers,
  editUser,
  deleteUser,
  searchById,
} = require("../controllers/admin-user-controller");

router.post("/createnewuser", createAdminUser);
router.get("/alladminusers", getAllAdminUsers);
router.put("/edit/:id", editUser);
router.delete("/delete/:id", deleteUser);
router.get("/search/:searchterm", searchById);

module.exports = router;
