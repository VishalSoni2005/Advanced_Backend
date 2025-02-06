const express = require("express");
const routes = require("./routes/routes.js");
const app = express();
const cors = require("cors");//!

// Connect to MongoDB
const { connectDB } = require("./config/db");
connectDB();

// Middleware
app.use(cors()); //!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/helo', (req, res) => {
  res.json({ message: 'your server is working. :), Your connect frontend to backend'});
})
app.use("/", routes);
// app.use('/signup', routes);

require("dotenv").config();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
