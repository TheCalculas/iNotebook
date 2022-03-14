const mongoose = require("mongoose");
const url =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const conntectToMongo = () => {
  mongoose.connect(url, () => {
    console.log("Connected to Mongo Sucessfully");
  });
};

// now it gets exported

module.exports = conntectToMongo;
