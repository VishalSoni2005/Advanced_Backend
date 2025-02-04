const nodemailer = require("nodemailer");
require("dotenv").config();

const sentOTPViaMail = async (email, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.USER_EMAIL,
      to: email,
      subject: "OTP Verification",
      html: `<p>Your One-Time Password (OTP) is: <b>${otp}</b>. It will expire in the next 48 minutes.</p>`, // Corrected from `text` to `html`
    };

    await transporter.sendMail(mailOptions);
    console.log(`OTP sent to ${email}`);

    return true;
  } catch (e) {
    console.error("Error sending email:", e);
    return false;
  }
};

module.exports = sentOTPViaMail;
