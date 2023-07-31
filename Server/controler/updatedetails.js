const user = require("../models/usermodel");
const bycrpt = require('bcrypt');

exports.getUserDetails = async(req,res,next)=>{
    const {email} = req.body;
    const response = await user.findByPk(email);
    res.send({message:response,status:true});
}

exports.postUserDetails = async(req,res,next)=>{
    const {email,username,password,address,phoneno}= req.body;
    const response = await user.findByPk(email);
    const hashpassword = bycrpt.hash(password,10);
    await response.update({
        username:username,
        password:hashpassword,
        address:address,
        mobileno:phoneno
    });
    await response.save();
    res.send({message:'updated success', status:true});
}