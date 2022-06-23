const jwt = require('jsonwebtoken');
const { response } = require('../helpers/response');
const User = require('../models/User');


exports.isAuth = async (req,res,next)=>{
    try{
        const token = req.headers['x-auth-token'] ;

        if(!token){
            return response({
                res ,
                message : 'access denied !' ,
                status : 403
            })
        }

        jwt.verify(token , process.env.JWT_KEY , async (err , decode)=>{
            if(err){
                return response({
                    res , 
                    message : 'access denied ! !' ,
                    status : 403 
                })
            }

            const user = await User.findById(decode.id) ;
            req.user = user ; 
            next()
        });

    }
    catch(err){
        console.log(err)
        response({
            res , 
            message : 'access denied ! ?' ,
            status : 403 
        })
    }
}