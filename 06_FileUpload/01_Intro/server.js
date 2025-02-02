const express = require("express");
const app = express();
const  connectDB  = require("./config/db");
const { cloudinaryConnect } = require("./config/cloud");
require("dotenv").config();
const fileUpload = require("express-fileupload");
const Upload = require("./routes/upload");

connectDB(); //todo: connect mongodb
cloudinaryConnect(); //todo: connect cloudinary

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload()); //! special middleware to upload files

// Routes
app.use("/api/v1/upload", Upload); // todo: upload route

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`👍👍 Server running on port ${PORT}`));
