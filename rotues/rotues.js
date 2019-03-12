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
//check data store
// {

//     if(req.body === undefined) {

//         console.log('True true');

//     }
{
    console.log(JSON.stringify(req.body));
    const result = await knex("dhara.login").insert({
        name:req.body.name,
        password:req.body.password

    })
    res.send(result);
    console.log(result);
})

router.post("/signup", async function(req,res){

    console.log(JSON.stringify(req.body));
    const result = await knex("dhara.reg").insert({
        name:req.body.name,
        address:req.body.address,
        contact_no:req.body.contact_no,
        email:req.body.email,
        password:req.body.password
    })
})
    
module.exports = router;