const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controller/userController.js");

const { isAuthenticatedUser } = require("../middleware/auth.js");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", isAuthenticatedUser, logoutUser);

module.exports = router;
