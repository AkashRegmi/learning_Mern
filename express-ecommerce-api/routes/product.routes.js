const express = require("express");
const router= express.Router();
const {body, validationResult}= require ("express-validator");
const jwt= require("jsonwebtoken");
const {signIn,signUp} = require("../controller/auth.controller")
const{ getProductById,
    getProduct,
    addProduct,
    deleteProductById,
    updateProductById,
    getFeaturedProducts,
    getLatestProducts} = require("../controller/products.controller");
const { JWT_SECRET_KEY } = require("../config/constants");
const { checkAuth, checkAuthAdmin } = require("../middleware/check_auth.middleware");
const validate = require("../middleware/validator.middleware");
const { removeListener } = require("../models/User");
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file.mimetype.split('/')[1])
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const fileExtension=file.mimetype.split('/')[1]
      cb(null, Date.now() + "."+fileExtension)
    }
  })
  
  const upload = multer({ storage: storage })//incase of the error message
//VALIDATOR 
// const checkAuth = (role)=>{
//     return (req, res, next) => {
//         const { token } = req.headers; //const token=req.headers.token they both are same .
//         try {
//           const user = jwt.verify(token, JWT_SECRET_KEY);
//           if(!user.role.includes(role)){
//             res.status(403).json({ message: "Only Admin can access(Unauthorize Action)" });
//             return;
//           }
//           req.authUser = user;
//           // console.log(user);
      
//           next();
//         } catch (error) {
//           res.status(401).json({ message: "unauthorize token" });
//         }
//       };
// }

//Route for the product
// router.post("/",checkAuthAdmin,body("name").notEmpty().withMessage("Product name is required"),
// body("price").notEmpty().withMessage("Product price is required"),validate, addProduct)
router.post("/",checkAuthAdmin,upload.single("image"), addProduct)
router.get("/", getProduct);
router.get("/featured", getFeaturedProducts);
router.get("/latest", getLatestProducts);
router.get("/:productid", checkAuth,getProductById);
router.delete("/:id", deleteProductById);  // checkAuthAdmin,
router.patch("/:id", checkAuthAdmin,updateProductById);

module.exports=router;

