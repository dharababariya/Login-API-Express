const express = require('express');
const router = express.Router();
const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'postgres',
      database : 'login'
    }
  });
   

router.use(function (req,res, next){
    if("OPTIONS" === req.method){
        res.sendStatus(200)
    }else{
        next();
    }
})

router.post("/login", async function (req,res) 
{

    if(req.body === undefined) {

        console.log('True true');

    }

    console.log(JSON.stringify(req.body));
    const result = await knex("dhara.login").insert({
        name:req.body.name,
        password:req.body.password

    })
    res.send(result);
    console.log(result);
})
    
module.exports = router;