const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected...");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
}

module.exports = connectDB;
