const express = require("express");
const app = express();
const logFile = require("./Middleware/Middleware.js");
const { connectDB } = require("./Connection");
const Routes = require("./Routes/Route.js");
const path = require("path");

// Set view engine to EJS
app.set('view engine', 'ejs');
// path.set('views', path.resolve("./views/index.ejs"));
app.set('views', path.join(__dirname, 'views'));


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logFile("log.txt"));

// connection
connectDB("mongodb://127.0.0.1:27017/29th-january-urlShortners")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// routes
app.use("/", Routes);

const port = 3000;
app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
