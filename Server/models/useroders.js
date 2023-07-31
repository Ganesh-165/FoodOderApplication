const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const useroders = sequelize.define('UserOders',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    noofitems:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    totalAmount:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
    delevered:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    }
});

module.exports = useroders;