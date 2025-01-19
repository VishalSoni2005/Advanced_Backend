const express = require("express");
const app = express();
const connect = require("./connection");

const Model = require("./model/userModel");

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

app.get('/', (req, res) => {
    res.send("Hello World!");
});
app.post('/:id', (req, res) =>{
    
})

//conections
connect("mongodb://127.0.0.1:27017/url-shortener-03").then(function () {
  console.log("Connected to MongoDB!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server listening on port", `${PORT}`);
});
