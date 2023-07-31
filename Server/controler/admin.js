const { Sequelize } = require('sequelize');
const items = require('../models/itemsmodel');
const user = require('../models/usermodel');
const bcrypt = require('bcrypt');
const useroders = require('../models/useroders');
const oderitem = require('../models/odersitems');

exports.getItem = async(req,res,next)=>{
    const response = await items.findAll();
    res.json({message:response,status:true});
}
exports.getOder = async(req,res,next)=>{
    const response = await useroders.findAll({where:{delevered:false}});
    res.json({message:response,status:true});

}
exports.getSingleItem = async(req,res,next)=>{
    const {name} = req.body;
    const response = await items.findByPk(name);
    res.json({message:response,status:true});
}
exports.getSingleOderItem = async(req,res,next)=>{
    const {id,email} = req.body;
    const useremail = await user.findAll({where:{email:email}});
    const oderitems = await oderitem.findAll({where:{oderid:id}});
    res.json({address:useremail[0].address,mobileno:useremail[0].mobileno,oderitems:oderitems,status:true});
}
exports.updateSingleOderItem = async(req,res,next)=>{
    const {id} = req.body;
    const response = await useroders.findByPk(id);
    await response.update({
        delevered:true,
    })
    await response.save();
    res.json({message:'Oder Delevered Sucsssfully',status:true});
}
exports.updateSingleItem = async(req,res,next)=>{
    const {name,description,price} = req.body;
    const response = await items.findByPk(name);
    await response.update({
        description:description,
        price:price,
    });
    await response.save();
    res.json({message:'item updated successfully',status:true});
}
exports.deleteSingleItem = async(req,res,next)=>{
    const {name} = req.body;
    await items.destroy({where:{name:name}});
    res.json({message:'item Deleted sucssesfullly', status:true});
}
exports.postAddItem = async(req,res,next)=>{
    const {name,description,price,itemType} = req.body;
    const response = await items.findByPk(name);
    const id = Math.floor(Math.random()*1000000);
    if(!response){
        await items.create({
            id:id,
            name:name,
            description:description,
            itemType:itemType,
            price:price
        });
        return res.json({message:'item added sucssesfully',status:true});
    }
    res.json({message:'item alrready registered',status:false});
}
exports.postRegisterData = async(req,res,next)=>{
    const {email,username,password,address,mobileno}= req.body;
    const response = await user.findByPk(email);
    if(response){
       return res.json({message:'Email Already Registered',status:false});
    }
    const bcryptpwd = await bcrypt.hash(password,10);
    await user.create({
        email:email,
        username:username,
        password:bcryptpwd,
        address:address,
        mobileno:mobileno,
        userType:'admin'
    });
    res.json({message:'Registerd Successfully',status:true});
}