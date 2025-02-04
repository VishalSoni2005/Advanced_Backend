const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');

const authTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, //!
    ref: "User",
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300, // Expires in 5 mins
  },
});

// authTokenSchema.methods.generateToken = function () {
//   const token = jwt.sign({ userId: this.userId }, process.env.JWT_SECRET, { expiresIn: '5m' });
//   return token;
// }

module.exports = mongoose.model("AuthToken", authTokenSchema);
