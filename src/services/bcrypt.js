const bcrypt = require('bcrypt');


exports.hashPassword = async (password)=>{
    return new Promise((success , error)=>{
        const result = bcrypt.hashSync(password , 12); 

        if(!result){
            return error('the bcrypt package does not work')
        }

        success(result)
    })
}


exports.comparePassword = async (password , hash)=>{
    return new Promise((valid , not_valid)=>{
        const compare = bcrypt.compare(password , hash).then(function (result){
            if(!result) return not_valid(true);
            valid(true)
        })
    })
}