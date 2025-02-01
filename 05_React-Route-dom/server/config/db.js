const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  try {
    console.log("MongoDB URL:", process.env.MONGO_URL); // Debugging step
    await mongoose.connect(process.env.MONGO_URL);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1); // Stop the app if the DB doesn't connect
  }
}

module.exports = {
  connectDB,
};
