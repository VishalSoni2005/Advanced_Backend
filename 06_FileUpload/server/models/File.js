const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  imageURL: {
    type: String,
    // required: true,
  },
  tag: {
    type: String,
  },
  email: {
    type: String,
    // required: true,
  },
});

//* here
require("dotenv").config();
// fileSchema.post("save", async (doc) => {
//   // doc contain all entry created in DB
//   try {
//     const transporter = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: "Vishal Soni",
//       to: doc.email,
//       subject: "Hard Work Pays Off",
//       text: `A file with the name ${doc.name} has been uploaded. access media ${doc.imageURL}`,
//     };

//     await transporter.sendMail(mailOptions);
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// });

module.exports = mongoose.model("File", fileSchema);
