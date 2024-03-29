const Product = require("../models/product");
const { resp } = require("../utils/respUtil");

exports.createProducts = async (req, res) => {
  try {
    const { name, price, description, image } = req.body;
  if(!name || !price || !description || !image){
    throw new Error("Please fill all the fields");
  }
    const newProduct = await Product.create({
      name,
      price,
      description,
      image,
    });
    res.status(200).json({
      user: newProduct,
      success: true,
      message: "Product added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const getProducts = await Product.find();
    res.status(200).json({
      message:'Product listed Succesfully',
      getProducts
    })
  } catch (error) {}
};
