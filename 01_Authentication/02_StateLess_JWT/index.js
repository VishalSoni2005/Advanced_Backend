const express = require("express");
const app = express();

const logFile = require("./Middleware/Middleware.js");

const { connectDB } = require("./Connection");

const authRoutes = require("./Routes/authRoutes.js");
const Routes = require("./Routes/Route.js");

const path = require("path");
const cookieParser = require("cookie-parser");

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// path.set('views', path.resolve("./views/index.ejs"));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use(express.json());
app.use(cookieParser()); // parse cookies
app.use(express.urlencoded({ extended: true }));
app.use(logFile("log.txt"));
app.use((req, res, next) => {
  res.locals.token = req.cookies.token || null; // Pass token to EJS
  next();
});

// connection
connectDB("mongodb://127.0.0.1:27017/29th-january-urlShortners")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// routes

// Homepage Route
app.get("/", (req, res) => {
  res.render("login"); // Renders views/index.ejs
});

app.use("/auth", authRoutes);
app.use("/", Routes);

const port = 3000;
app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
