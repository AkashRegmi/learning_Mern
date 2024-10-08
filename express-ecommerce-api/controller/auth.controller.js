const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/constants");

const signUp = async (req, res) => {
  const { password, ...remaining } = req.body;
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    res.status(400).json({
      message: "User alreadyqq exist.",
    });
    return;
  }

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  await User.create({
    ...remaining,
    password: hashedPassword,
    image: req.file ? req.file.filename : null,
  });
  res.status(201).json({
    message: "Your account has been successfully created",
  });
};

const signIn = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  //req.body=email:req.body.email && passord:req.body.password
  if (!user) {
    res.status(401).json({
      message: "User does not exist. Please Sign Up",
    });
    return;
  }

  const isValidPassword = bcrypt.compareSync(req.body.password, user.password);

  if (isValidPassword) {
    //move secrete key to env
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        roles: user.roles,
        name: user.name,
      },
      JWT_SECRET_KEY,
      {
        expiresIn: "10d",
      }
    );
    const expireAt = new Date();
    expireAt.setDate(expireAt.getDate() + 10); // Adds 10 days to the current date

    res.cookie("token", token, {
      httpOnly: true,
      expires: expireAt,
    });

    res.status(200).json({
      message: "successfully logged In.",
      token,
      user,
      expireAt,
    });
    return;
  }

  res.status(401).json({
    message: "Invalid Credential.",
  });
};

const logout= async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "successfully logged out.",
  })
};

module.exports = {
  signIn,
  signUp,
  logout,
  
};
