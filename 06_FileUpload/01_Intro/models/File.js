const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: String,

  imageURL: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("File", fileSchema);