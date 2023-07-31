const express = require('express');

const { postAddItem, getItem, getSingleItem, updateSingleItem, deleteSingleItem, postRegisterData, getOder, getSingleOderItem, updateSingleOderItem } = require('../controler/admin');

const router = express.Router();

router.get('/getItems',getItem);
router.get('/getOder',getOder);
router.post('/getSingleOder',getSingleOderItem);
router.patch('/getSingleOder',updateSingleOderItem);
router.post('/singleItem',getSingleItem);
router.patch('/singleItem',updateSingleItem);
router.post('/deletesingleItem',deleteSingleItem);
router.post('/addItem',postAddItem);
router.post('/addadmin',postRegisterData);

module.exports = router;