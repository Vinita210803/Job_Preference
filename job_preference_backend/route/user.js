const express = require('express');
const router = express.Router();

const user=require('../controllers/user_controllers');

const middelware=require('../config/jwt-middelware');

//const jwt = require('jsonwebtoken');


router.post('/register',user.create);
router.post('/verify',user.verify);
router.post('/login',user.login);

module.exports=router;