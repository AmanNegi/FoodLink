const mongoose = require("mongoose");
const User = require("../models/user");
const getToken = require("../utils/jwtToken");

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });

  // set the cookie and send response
  getToken(user, 201, res);
  console.log("User registered successfully");
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  // check if email and password are entered
  if (!email || !password) {
    return next(new Error("Please enter email and password"));
  }

  // find user by email and select the password field
  const user = await User.findOne({ email }).select("password");

  if (!user) {
    return next(new Error("Invalid email or password"));
  }

  // check if entered password matches the password in the database
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new Error("Invalid email or password"));
  }

  // get jwt token and save it to cookie for future use
  getToken(user, 201, res);
};

exports.logoutUser = async (req, res) => {
  // delete the token from cookie
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  console.log("User logged out successfully");

  return res.status(201).json({
    success: true,
    message: "User logged out successfully",
  });
};
