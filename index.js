console.log('hello Dhara');
const express = require('express');
const app = express();
const port = 8080;

app.get('/' , (req,res) => res.send('hello i m here!'));
app.listen(port,() => console.log('listen port 8080'));