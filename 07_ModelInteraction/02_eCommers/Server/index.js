const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./routes/routes");
const connectDB = require("./config/database");

// Connect to MongoDB
connectDB.connectDB();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// Routes

app.use("/api", routes);

// listen
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`😘 Server running on port ${PORT}`));
