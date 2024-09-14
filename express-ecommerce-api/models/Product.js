const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   //athor:{type:Schema.Type.objectId, ref:"person"  },
//   user:{type: mongoose.Schema.Types.ObjectId, ref:"User"},
//   name: String,
//   price: Number,
//   image: String,
//   featured: Boolean,
  
// });
const productSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true }, // Ensure this field is required if needed
  price: Number,
  image: String,
  featured: Boolean,
});


const Product = mongoose.model("Product", productSchema);

module.exports = Product;