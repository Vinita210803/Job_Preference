const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment_controller')
const user=require('../controllers/user_controllers');

const middelware=require('../config/jwt-middelware');

//const jwt = require('jsonwebtoken');


router.post('/register',user.create);
router.post('/verify',user.verify);
router.post('/login',user.login);
router.post('/createOrder', paymentController.createOrder);
router.post('/checkout', paymentController.checkout);
router.get('/paymentverifiction',paymentController.paymentVerification)
module.exports=router;