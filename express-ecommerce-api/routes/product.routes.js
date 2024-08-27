const express = require("express");
const router= express.Router();
const jwt= require("jsonwebtoken");
const {signIn,signUp} = require("../controller/auth.controller")
const{ getProductById,
    getProduct,
    addProduct,
    deleteProductById,
    updateProductById} = require("../controller/products.controller");
const { JWT_SECRET_KEY } = require("../config/constants");
const { checkAuth } = require("../middleware/check_auth.middleware");
//VALIDATOR 


//Route for the product
router.post("/",checkAuth,addProduct)
router.get("/",checkAuth, getProduct);
router.get("/:productid", checkAuth,getProductById);
router.delete("/:id", checkAuth, deleteProductById);
router.patch("/:id", checkAuth,updateProductById);

module.exports=router;

