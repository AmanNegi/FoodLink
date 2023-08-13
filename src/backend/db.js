const mongoose = require("mongoose");

const connectDatabase = () => {
  try {
    mongoose
      .connect("mongodb://127.0.0.1:27017/foodlink", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log("Connection Successful to the Database");
      });
  } catch (err) {
    console.log("Error while Connecting to Database: ", err);
  }
};

module.exports = connectDatabase;
