const mongoose = require("mongoose");

exports.connectDB = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/30th-ssr-to-db", () => {
    console.log("Connected to MongoDB");
  });
}

// module.exports = connectDB;
