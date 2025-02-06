const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes/routes');
const connectDB = require('./config/db.JS');

// Connect to MongoDB
connectDB.connectDB();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes

app.use('/api/', routes);

// listen
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`😘 Server running on port ${PORT}`));
