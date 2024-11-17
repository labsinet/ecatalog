// Import sequelize 
const { Sequelize, DataTypes } = require("sequelize");

// Import connection 
const db = require("../config/database.js");

// Define schema
const Books = db.define('books', {
  // Define attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  booksname: {
    type: DataTypes.STRING
  },
  author: {
    type: DataTypes.DOUBLE
  },
  year: {
    type: DataTypes.INTEGER
  },
  city: {
    type: DataTypes.STRING
  },
  publisher: {
    type: DataTypes.STRING
  },
  department: {
    type: DataTypes.TINYINT
  },
  count_page: {
    type: DataTypes.INTEGER
  },
  bbk: {
    type: DataTypes.STRING
  },
  count: {
    type: DataTypes.INTEGER
  },
  comment: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE
  },
  updatedAt: {
    type: DataTypes.DATE
  },
},{
  // Freeze Table Name
  freezeTableName: true
});

// Export model Product
module.exports = Books;
