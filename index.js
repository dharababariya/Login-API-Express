
const express = require('express');
const app = express();
const port = 8080;
const user = require('./rotues/rotues');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(user);

app.listen(port,() => console.log('listen port 8080'));