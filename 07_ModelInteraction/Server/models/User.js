const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
    unique: true,
  },
  accountType: {
    type: String,
    enum: ["student", "instructor"],
    default: "student",
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "instructor"],
    default: "user",
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  resetToken: {
    type: mongoose.Schema.Types.ObjectId, //!
    ref: "AuthToken",
  },
});

//todo: Hash password before saving
userSchema.pre("save", async (next) => {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
  next();
});

module.exports = mongoose.model("User", userSchema);
