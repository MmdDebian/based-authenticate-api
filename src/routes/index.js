const express =require('express');
const { response } = require('../helpers/response');
const User = require('../models/User');
const router = express.Router();


router.get('/' , async(req,res,next)=>{
    try{
        const users = await User.find({}) ;
        response({
            res ,
            data : users 
        });
    }
    catch(err){
        next(err)
    }
})
router.use('/home' , require('./home'))
router.use('/auth' , require('./auth'));
router.use('/user' , require('./user')) ;

router.all('*' , (req,res,next)=>{
    try{
        let error = new Error('route is not valid') ;
        error.status = 400 ;
        throw error ;
    }
    catch(err){
        next(err)
    }
});


router.use((err,req,res,next)=>{
    response({
        res , 
        message : "internet server error" , 
        status : 500
    });
})



module.exports = router ;