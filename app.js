const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const port = process.env.PORT || 5000;

//middleware
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//routes
const indexRoute = require('./routes/index');

app.use('/', indexRoute);

app.listen(port);