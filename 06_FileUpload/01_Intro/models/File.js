const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("File", fileSchema);
// const mongoose = require("mongoose");

// const fileSchema = new mongoose.Schema({
//   name: String,

//   imageURL: {
//     type: String,
//     required: true,
//   },
//   tag: {
//     type: String,
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
// });

// module.exports = mongoose.model("File", fileSchema);
