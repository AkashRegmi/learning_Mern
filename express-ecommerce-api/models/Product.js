const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  //athor:{type:Schema.Type.objectId, ref:"person"  },
  user:{type: mongoose.Schema.Types.ObjectId, ref:"User"},
  name: String,
  price: Number,
  image: String,
  
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;