const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { hashPassword, comparePassword } = require('../services/bcrypt');
const  { response } = require('../helpers/response');

exports.register =  async(req,res,next)=>{
    try{

        let { email , password , name } = req.body ;

        let user = await User.findOne({email : email});

        if(user){
            return response({
                res , 
                message : "email or password is not valid",
                data : null, 
                status : 400,
            }) ;
        }


        password = await hashPassword(password);

        const newUser = new User({
            name ,
            email : email.toLowerCase() , 
            password ,
        }) ;

        const result = await newUser.save();

        const token = await jwt.sign({id:result.id} , process.env.JWT_KEY , { expiresIn : '15d' }) ;
        
        response({
            res ,
            message : 'successfuly registered' , 
            data : token ,
            status : 201
        }) ;
    }
    catch(err){
        next(err)
    }
}


exports.login = async (req,res,next)=>{
    try{
        const { email , password } = req.body ;

        const user = await User.findOne({email:email})

        if(!user){
            return response({
                res ,
                message : 'email or password id not valid' , 
                data : null , 
                status : 400 ,
            })
        }


        comparePassword(password , user.password)// handle promise valid or not valid password
        .then(async()=>{
            const token = await jwt.sign({id:user.id} ,  process.env.JWT_KEY ,{expiresIn : '15d'});

            response({
                res ,
                message : 'successfuly logged in' , 
                data : token , 
            })
        })
        .catch((err)=>{
            response({
                res,
                message : 'email or password is not valid' ,
                status : 400
            })
        })
    }
    catch(err){
        next(err)
    }
}