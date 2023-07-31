const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const items = sequelize.define('Item',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        primaryKey:true,
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    itemType:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    tableName:'Item'
})

module.exports = items;