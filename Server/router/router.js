const express = require('express');

const { postRegisterData } = require('../controler/register');
const { postLoginData } = require('../controler/login');
const { getUserDetails, postUserDetails } = require('../controler/updatedetails');
const adminroutes = require('./adminroutes');
const { getItems } = require('../controler/items');
const { postOders, getOders, getSingleOder } = require('../controler/oders');
const { postLogout } = require('../controler/logout');
const { refTokenHandler } = require('../controler/refTokenHandler');
const { verifyJWT } = require('../middleware/verifyJwt');

const router = express.Router();


router.post('/login',postLoginData);
router.post('/logout',postLogout);
router.get('/refresh',refTokenHandler);
router.post('/register',postRegisterData);

router.use(verifyJWT);
router.use('/admin',adminroutes);
router.get('/singleOder',getSingleOder);
router.get('/userupdatedetails',getUserDetails);
router.post('/userupdatedetails',postUserDetails);
router.post('/oders',postOders);
router.post('/oder',getOders);
router.post('/getitems',getItems);


module.exports = router;