const mongoose = require("mongoose");
const shortId = require("shortid");

const userSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
    default: shortId.generate,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("Url", userSchema);//*When you insert the first document using the model, MongoDB automatically creates the collection. The name of the collection is derived from the model name. By default, Mongoose pluralizes the model name and converts it to lowercase. For example, if your model is named Url, the collection will be named urls.