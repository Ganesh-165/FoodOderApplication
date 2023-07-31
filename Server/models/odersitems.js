const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");


const oderitem = sequelize.define('OderItems',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    oderid:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    amount:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }

},{
    tableName:'OderItem'
})

module.exports = oderitem;