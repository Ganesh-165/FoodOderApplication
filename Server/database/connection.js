const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('foododerapplication','root','ganesh',{dialect:'mysql',host:'127.0.0.1',logging:false});

sequelize.authenticate().then(()=>{
    console.log('database connected');
}).catch(err=>console.log(err));

module.exports = sequelize;