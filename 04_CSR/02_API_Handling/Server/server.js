const express = require("express");
const { connectDB } = require("./Config/db");
const app = express();
require("dotenv").config();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Import routes
const routes = require("./Routes/routes.js");
app.use("/api", routes);

// Start the server

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`😏 Server running on port ${PORT}`));
