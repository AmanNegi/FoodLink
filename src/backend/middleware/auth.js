const jwt = require("jsonwebtoken");
const User = require("../models/user");

// to check weather the user trying to logout is a valid user
exports.isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;

  // if token user is already logout or if the user is not a valid user
  if (!token) {
    return next(new Error("Please Login to access this resource"));
  }

  // get the id from the token to check the user is valid and is there in the db
  const decodedData = jwt.verify(
    token,
    "12345670-098lk@CSADFHD!@HDCZXCkkjqrzxcvbnmhjmuk"
  );
  req.user = await User.findById(decodedData.id);
  next();
};
