const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [50, "Name cannot be more than 50 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [3, "Password must be at least 6 characters long"],
    maxlength: [50, "Password cannot be more than 50 characters long"],
  },
  role: {
    type: String,
    required: true,
    enum: ["student", "admin"],
  },
});

module.exports = mongoose.model("User", userSchema);
