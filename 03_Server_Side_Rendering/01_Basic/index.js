const express = require('express');
const path = require('path');

const expressLayouts = require("express-ejs-layouts");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', 'layout')

const routes = require('./routes/greetingRoutes.js');
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});