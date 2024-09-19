//
require('dotenv').config();

const express = require("express");
const app = express();
const port = 3000;
const connectDb = require("./config/db");
require("express-async-errors")
const cors = require('cors')
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");
const Product = require("./models/Product");
const User = require("./models/User");
const { query, validationResult } = require("express-validator");
const { signUp, signIn } = require("./controller/auth.controller");
app.use(express.json());
app.use(cors())
app.use(express.static("uploads"))
connectDb();

// app.get("/add-product", query("name").notEmpty(), query("price").notEmpty(),(req, res) => {
//   const result = validationResult(req);

//   res.json({
//     errors: result.array(),
//   });
// });

app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
// app.get("/test", (req, res) => {
//   res.satus(202).json({
//     message:"ok ok"
//   })
// })
app.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not found.",
  });
});


// app.use((err,req,res,next)=> {
// // console.log(err);//from here we get to knw the where the error is occured iit is saved in aws sentry...
// res.status(500).json({
//   message:"Internal Server Error Developer mistake"
// });
// });
// app.listen(port, () => {
//   console.log("Ecommerce app listening on port " + port);
// });
app.use((err, req, res, next) => {
  console.error("Error: ", err);  // This logs the actual error message on the server
  res.status(500).json({
    message: "Internal Server Error Developer mistake",
    error: err.message,  // Send the error message to the client for debugging
  });
});

app.listen(port, () => {
    console.log("Ecommerce app listening on port " + port);
  });