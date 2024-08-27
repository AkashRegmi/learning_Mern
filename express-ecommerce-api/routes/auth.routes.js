const express = require("express");

const { signIn, signUp } = require("../controller/auth.controller");
const validate = require("../middleware/validator.middleware");
const router = express.Router();



// API ROUTES
router.post("/sign-up",  signUp);
router.post("/sign-in", signIn);

module.exports = router;
