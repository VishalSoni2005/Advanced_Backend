const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = async () => {
  try {
    const conn = await (await mongoose.connect(process.env.MONGO_URI));
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
