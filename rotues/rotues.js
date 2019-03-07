const express = require('express');
const router = express.Router();
const db = require('../db/knex');

router.use(function (req,res, next){
    if("OPTIONS" === req.method){
        res.sendStatus(200)
    }else{
        next();
    }
})

router.post("/login", async function (req,res) 
{
    console.log(JSON.stringify(req.body));
    const result = await knex("dhara.login").insert({
        name:req.body.name,
        password:req.body.password

    })
    res.send(result);
})
    
module.exports = router;