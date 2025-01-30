const express = require("express");
const app = express();

const path = require("path"); //*

// app.set("view engine", "ejs"); //*
// app.set("views", path.join(__dirname, "Views")); //*


const { connectDB } = require("./Config/db");
const routes = require("./Routes/Routes");

connectDB(); // connection established

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
