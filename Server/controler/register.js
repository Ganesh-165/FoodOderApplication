const user = require("../models/usermodel");
const bcrypt = require('bcrypt');

exports.postRegisterData = async(req,res,next)=>{
    const {email,username,password,address,mobileno}= req.body;
    const response = await user.findByPk(email);
    if(response){
       return res.json({message:'Email Already Registered',status:'false'});
    }
    const bcryptpwd = await bcrypt.hash(password,10);
    await user.create({
        email:email,
        username:username,
        password:bcryptpwd,
        address:address,
        mobileno:mobileno,
        userType:'user'
    });
    res.json({message:'Registerd Successfully',status:true});
}