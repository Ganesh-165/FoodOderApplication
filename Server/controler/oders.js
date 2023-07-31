const { Sequelize, where } = require("sequelize");
const oderitem = require("../models/odersitems");
const useroders = require("../models/useroders");

exports.getOders = async(req,res,next)=>{
    const {email} = req.body;
    const response = await useroders.findAll({where:{email:email}});
    res.json({response:response});
}

exports.getSingleOder = async(req,res,next)=>{
    const {id} = req.body;
    const response = await oderitem.findAll({where:{oderid:id}});
    res.json({response:response});
}

exports.postOders = async(req,res,next)=>{
    const {email,noofitems,totalAmount,oders} = req.body;
    const response = await useroders.create({
        email:email,
        noofitems:noofitems,
        totalAmount:totalAmount,
        delevered:false
    });
    const oderid = response.id;
    const newOder = oders.map((oderitem)=>{
      return  {
        oderid:oderid,
        ...oderitem
      };
    })
    await oderitem.bulkCreate(newOder);
    res.json({message:'odered Sucssesfully',status:true});
}