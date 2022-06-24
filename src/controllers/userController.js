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
        const { name  } = req.body ;
        
        let found = await User.findOne({id:req.user.id}) ;
       
        found.name = name ;
        
        found.save((err , result)=>{
            if(err){
                return response({
                    res ,
                    message : 'intertnet server error' ,
                    status : 500 
                })
            }

            response({
                res , 
                message : 'successfuly updated' , 
                data : result 
            })
        })

    } 
    catch (error) {
        next(error)
    }
}

