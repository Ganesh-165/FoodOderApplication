const  {Sequelize}  = require("sequelize");
const items = require("../models/itemsmodel");

exports.getItems = async (req,res,next)=>{
    const {type} = req.body;
    const response = await items.findAll({where:{itemType:type}});
    res.send({data:response,status:true});
}