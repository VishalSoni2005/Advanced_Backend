const express = require("express");
const routes = require("./routes/routes.js");
const app = express();
const cookiesParser = require("cookie-parser");
const cors = require("cors"); //!
const path = require("path");

// Connect to MongoDB
const { connectDB } = require("./config/db");
connectDB();

app.set("view engine", "ejs");
// seting directory for ejs files
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(cors()); //!
// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser()); //!

// Routes
app.use("/api", routes);

// Start server
require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
