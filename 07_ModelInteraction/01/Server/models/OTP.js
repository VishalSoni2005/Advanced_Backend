const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,   //!
        ref: 'User',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300
    }
})

module.exports = mongoose.model("OTP", OTPSchema);