import { Sequelize } from 'sequelize';
 
const db = new Sequelize('tklib', 'root', 'usbw', {
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db;
