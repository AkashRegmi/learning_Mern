const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const result = validationResult(req);
  if (result.array().length === 0) next();
  else {
    res.status(404).json({
      message: "bad Request",
      errors: result.array(),
    });
  }
};
module.exports = validate;
