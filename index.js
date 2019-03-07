
const express = require('express');
const app = express();
const port = 8080;
const user = require('./rotues/rotues');
const db = require('./db/knex');
const bodyParser = require('body-parser');
app.use(user);
app.use(bodyParser);


app.listen(port,() => console.log('listen port 8080'));