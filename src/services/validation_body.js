const { validationResult } = require('express-validator');
const { response } = require('../helpers/response');



// validation body 
function validationBody(req,res){
    const result = validationResult(req);

    if(!result.isEmpty()){
      
        response({
            res ,
            message : "validation error" ,
            data : result.array().map(err=>err.msg) ,
            status : 400
        });

        return false;
    }

    return true ;
}


// check express-validator errors 
exports.validate = async (req,res,next)=>{
    if(!validationBody(req,res)){
        return 
    }

    next()
}