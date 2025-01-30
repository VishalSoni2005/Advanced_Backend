const express = require("express");
const app = express();
const mongodb = require("./Config/db");
const bodyParser = require("body-parser");
const routes = require("./Routes/routes");

// Connect to MongoDB
mongodb.connectDB;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

// routes
// app.get('/', (req, res) => {
//     res.render('home');
// })
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
