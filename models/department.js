const {Sequelize,DataTypes}= require("sequelize");
const sequelize = require('../utils/db-connection');


const Department = sequelize.define('Department',{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    }
})


module.exports = Department;