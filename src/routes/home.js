const express = require('express');
const { response } = require('../helpers/response');
const User = require('../models/User');
const router = express.Router() ;


router.get('/delete' , (req,res)=>{
    User.deleteMany()
    .then(()=>{
        response({
            res ,
            message : "deleted"
        })
    })
})


module.exports = router ;