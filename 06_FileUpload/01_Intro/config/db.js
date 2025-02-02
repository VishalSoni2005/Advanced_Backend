const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error, "Error connecting to MongoDB");
  }
}

module.exports = connectDB;
