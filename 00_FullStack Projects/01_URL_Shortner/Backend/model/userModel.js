const mongoose = require("mongoose");

// fist make schema
const userSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      index: true,
      dropDups: true,
    },
    RedirectEmail: {
      type: String,
      required: true,
      unique: true,
    },
    shordEmail: {
      type: String,
      required: true,
      unique: true,
    },
    visitHistory: [{type: Date}],
  },
  {
    timestamps: true,
  }
);

// then make models

const models = mongoose.model("users", userSchema);

module.exports = models;
