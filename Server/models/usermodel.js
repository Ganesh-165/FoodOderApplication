const {Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const user = sequelize.define('User',{
    email:{
        type:DataTypes.STRING,
        primaryKey:true,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    mobileno:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    refreshToken:{
        type:DataTypes.STRING,
        allowNull:true
    }
},{
    tableName:'User'
});

module.exports = user;