const express = require("express");
const {
  createProducts,
  getAllProducts,
} = require("../controllers/product-controller");
const router = express.Router();

router.post("/createproduct", createProducts);
router.get("/products", getAllProducts);

module.exports = router;
