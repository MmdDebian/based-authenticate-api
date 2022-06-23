const { check } = require('express-validator');


exports.check_register = ()=>{
    return [
        check('email')
            .notEmpty().withMessage('email is required')
            .isEmail().withMessage('email is not format email')
        ,
        check('password')
            .notEmpty().withMessage('password is requied')
            .isLength({min : 5}).withMessage('The password is not secure')
    ]
}



exports.check_login = ()=>{
    return [
        check('email')
            .isEmail().withMessage('Email format is incorrect')
            .notEmpty().withMessage('email is required')
        ,
        check('password')
            .notEmpty().withMessage('password id required')
    ]
}
 