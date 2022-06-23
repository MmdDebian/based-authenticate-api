const express =require('express');
const router = express.Router();
const check_body = require('../services/check_body');// check body 
const { validate } = require('../services/validation_body'); // validation body 
const { register, login } = require('../controllers/authController'); // auth controller 



router.post(
    '/register',
    check_body.check_register(),
    validate ,
    register
)


router.post(
    '/login',
    check_body.check_login(),
    validate , 
    login
)


module.exports = router ;