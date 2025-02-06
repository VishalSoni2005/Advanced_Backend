const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/Sent-otp-via-mail");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
