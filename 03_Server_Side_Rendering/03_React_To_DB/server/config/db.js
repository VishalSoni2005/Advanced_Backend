const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/31st-jan-auth");
  console.log("MongoDB connected");
}

module.exports = {
  connectDB,
};
