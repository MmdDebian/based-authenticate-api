const express =require('express');
const { profile, update } = require('../controllers/userController');
const { isAuth } = require('../middlewares/isAuth');
const router = express.Router();

router.get('/' , isAuth , profile);
router.put('/update' , isAuth , update);

module.exports = router ;