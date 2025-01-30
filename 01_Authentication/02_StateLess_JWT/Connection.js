const mongoose = require("mongoose");

async function connectDB(url) {
  try {
    const conn = await mongoose.connect(url);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {connectDB};
