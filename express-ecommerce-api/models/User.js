const mongoose = require("mongoose");

// roles = ["super admin", "admin", "sales", "customer"]

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  image: String,
  
  roles: {
    type: [String],
    default: ["admin"],

  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;