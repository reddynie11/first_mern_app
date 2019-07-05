const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const indexRoute = require('./routes/index');

app.use('/', indexRoute);

app.listen(port);