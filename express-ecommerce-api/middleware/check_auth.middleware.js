const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = require("../config/constants");

const checkAuth = (req, res, next) => {
  const { token } = req.headers; //const token=req.headers.token they both are same .
  try {
    const user = jwt.verify(token, JWT_SECRET_KEY);
    req.authUser = user;
    // console.log(user);
    next();
  } catch (error) {
    res.status(401).json({ message: "unauthorize token" });
  }
};

const checkAuthAdmin = (req, res, next) => {
  const { token } = req.headers; //const token=req.headers.token they both are same .
  try {
    const user = jwt.verify(token, JWT_SECRET_KEY);
    // console.log("Verified user:", user); 
    if (!user.roles.includes("admin")) {
      res
        .status(401)
        .json({ message: "Only Admin can access(Unauthorize Action)" });
      return;
    }
    req.authUser = user;
    // console.log(user);
    next();
  } catch (error) {
    
    res.status(401).json({ message: "unauthorize token" });

  }
};

module.exports = {
  checkAuth,
  checkAuthAdmin,
};
