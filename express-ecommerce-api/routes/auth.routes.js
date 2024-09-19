const express = require("express");

const { signIn, signUp, logout } = require("../controller/auth.controller");
const validate = require("../middleware/validator.middleware");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the upload directory
  },
  filename: function (req, file, cb) {
    const fileExtension = file.mimetype.split('/')[1];
    cb(null, Date.now() + '.' + fileExtension); // Generate a unique filename
  }
});

const upload = multer({ storage: storage });


// VALIDATOR
const signUpValidator = [
  body("email").notEmpty().isEmail().withMessage("invalid email"),
  body("name")
    .isLength({ min: 3, max: 20 })
    .notEmpty()
    .withMessage("please entre the name betn 3 and 20 characers"),
  body("password").notEmpty(),
  validate,
];
const signInValidator = [
  body("email").notEmpty().isEmail().withMessage("Invalid email address"),
  body("password").notEmpty().withMessage("Password is required"),
  validate,
];
// API ROUTES
router.post("/sign-up",upload.single("image"),signUpValidator, signUp);
router.post("/sign-in",signInValidator, signIn);
router.post("/logout", logout);

module.exports = router;
