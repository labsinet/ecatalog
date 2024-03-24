// import sequelize 
import { Sequelize } from "sequelize";
// import connection 
import db from "../config/database.js";
 
// init DataTypes
const { DataTypes } = Sequelize;
 
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
export default Books;