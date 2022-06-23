const { response } = require("../helpers/response");
const User = require("../models/User");

exports.profile = async (req,res,next)=>{
    try{
        response({
            res, 
            data : {
                name : req.user.name, 
                email : req.user.email
            }
        });
    }
    catch(err){
        next(err)
    }
}


exports.update = async (req,res,next)=>{
    try {
        const user = await User.updateOne({id:req.user.id},{$set:req.body}) ;

        response({
            res ,
            message : 'successfuly updated' ,
            data : user ,
        })
    } 
    catch (error) {
        next(error)
    }
}

