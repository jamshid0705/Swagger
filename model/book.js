const sequelize=require('../config/db')
const Sequelize=require('sequelize')

const bookSchema=sequelize.define('books',{
  id:{
    type:Sequelize.DataTypes.UUID,
    defaultValue:Sequelize.DataTypes.UUIDV4,
    primaryKey:true
  },
  name:{
    type:Sequelize.DataTypes.STRING,
    allowNull:false
  },
  author:{
    type:Sequelize.DataTypes.STRING,
    allowNull:false
  },
  price:{
    type:Sequelize.DataTypes.INTEGER
  }
},{
  paranoid:true,
  freezeTableName:true
})

module.exports=bookSchema