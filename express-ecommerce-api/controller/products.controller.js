const Product = require("../models/Product");

// Route to get all products or search for products by name
const getProduct = async (req, res) => {
  console.log(req.authUser);
  try {
    const products = await Product.find();
    res.status(200).json({
      message: "Product fetch success",
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      message: "Product fetch error",
    });
  }
};
//To add  the product
const addProduct = async (req, res) => {
  await Product.create({
    name: req.body.name,
    price: req.body.price,
    user: req.authUser._id,
  });
  res.status(201).json({
    message: "Product added successfully",
  });
};
// Route to get a specific product by ID
const getProductById = async (req, res) => {
  const products = await Product.findById(req.params.productid);
  res.sendStatus(200).json({
    message: "prodct fetched Successfully",
    data: product,
  });
};

const deleteProductById = async (req, res) => {
  await Product.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "prodct deleted Successfully" });
};

const updateProductById = async (req, res) => {
  const id = req.params.id;
  await Product.updateOne({ _id: id }, req.body);
  res.status(200).json({ message: "prodct updated Successfully" });
};

module.exports = {
  getProductById,
  getProduct,
  addProduct,
  deleteProductById,
  updateProductById,
};
