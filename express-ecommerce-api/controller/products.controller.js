const { request } = require("express");
const Product = require("../models/Product");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// Route to get all products or search for products by name
// const getProduct = async (req, res) => {
//   console.log(req.authUser);
//   try {
//     const products = await Product.find();
//     res.status(200).json({
//       message: "Product fetch success",
//       data: products,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: "Product fetch error",
//     });
//   }
// };

// const getProduct = async (req, res) => {
//   // console.log(req.authUser);
//   const { page = 1, limit = 40 } = req.query;
//   const { name } = req.query; // Get the product name from query parameters
//   try {
//     // Find products matching the name and sort them by price in ascending order
//     // const products = await Product.find(name ? { name: new RegExp(name, "i") } : {})
//     //   .sort({ price: 1 }); // 1 for ascending, -1 for descending
//     const sortByFilter = {};
//     if (req.query.order) {
//       sortByFilter.price = req.query.order;
//     }
//     const filter = { name: new RegExp(req.query.search) };
//     if (req.query.minPrice && req.query.maxPrice) {
//       filter.price = { $gte: req.query.minPrice, $lte: req.query.maxPrice };
//     }
//     const products = await Product.find(filter)
//       .sort(sortByFilter)
//       .limit(limit)
//       .skip((page - 1) * limit ?? 40);

//     const total = await Product.countDocuments(filter);
//     res.status(200).json({
//       message: "Product fetch success",
//       data: { page, total, data: products },
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: "Product fetch error",
//     });
//   }
// };
const getProduct = async (req, res) => {
  const { page = 1, limit = 50 } = req.query;
  const { name, search, minPrice, maxPrice, order } = req.query;

  try {
    const sortByFilter = order ? { price: order } : {};
    const filter = {};
    if (search) {
      filter.name = new RegExp(search, "i");
    }
    if (minPrice && maxPrice) {
      filter.price = { $gte: minPrice, $lte: maxPrice };
    }

    const products = await Product.find(filter)
      .sort(sortByFilter)
      .limit(limit)
      .skip((page - 1) * limit);

    const total = await Product.countDocuments(filter);
    res.status(200).json({
      message: "Products fetched successfully",
      data: { page, total, products },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: "Error fetching products", error });
  }
};

//To add  the product
// const addProduct = async (req, res) => {
//   await Product.create({
//     name: req.body.name,
//     price: req.body.price,
//     user: req.authUser._id,
//     image: req.file.filename,
//     featured: req.body.featured,
//   });
//   res.status(201).json({
//     message: "Product added successfully",
//   });
// };
const addProduct = async (req, res) => {
  // console.log('Request body:', req.body); // Log the request body
  try {
    const newProduct = await Product.create({
      name: req.body.name, // Ensure this field is populated
      price: req.body.price,
      user: req.authUser._id,
      image: req.file ? req.file.filename : null,
      featured: req.body.featured === 'true', // Ensure boolean conversion if necessary
    });
    console.log('New product added:', newProduct); // Log the new product
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: "Error adding product", error });
  }
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

const getFeaturedProducts = async (req, res) => {
  const products = await Product.find({ featured: true })
  .limit(20);
  res.status(200).json({ message: "product Featured Successfully",
    data: products
   });
  
};

module.exports = {
  getProductById,
  getProduct,
  addProduct,
  deleteProductById,
  updateProductById,
  getFeaturedProducts,
};
