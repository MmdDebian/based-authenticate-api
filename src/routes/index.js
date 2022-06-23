const express =require('express');
const { response } = require('../helpers/response');
const User = require('../models/User');
const router = express.Router();






router.use('/auth' , require('./auth'));
router.use('/user' , require('./user')) ;




router.all('*' , (req,res,next)=>{
    try{
        let error = new Error('There is no requested route') ;
        error.status = 404 ;
        throw error ;
    }
    catch(err){
        next(err)
    }
});


router.use((err,req,res,next)=>{
    const message = err.message || '' ;
    const code = err.status || 500 ;

    response({
        res , 
        message : "internet server error" ,
        data : {
            err : message
        } ,
        status : code
    });
})



module.exports = router ;