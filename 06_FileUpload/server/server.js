const express = require("express");
const app = express();
const connectDB = require("./config/db");
const { cloudinaryConnect } = require("./config/cloud");
const fileUpload = require("express-fileupload");
const Upload = require("./routes/upload");
const cors = require("cors");

require("dotenv").config();
connectDB(); //todo: connect mongodb
cloudinaryConnect()
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  }),
); //* special middleware to upload files
// ✅ Allow CORS for frontend
app.use(cors({
  origin: "http://localhost:5173", // Change this to your frontend's URL
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
}));

// Routes
app.use("/", Upload); // todo: upload route

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`👍👍 Server running on port ${PORT}`));
