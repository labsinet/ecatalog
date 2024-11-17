const { Sequelize } = require('sequelize');

const db = new Sequelize('tklib', 'root', 'usbw', {
    host: 'localhost',
    dialect: 'mysql',
  //  logging: true,    // Вимкнення логів запитів (опціонально)
 // logging: (msg) => console.log(`[Sequelize] ${msg}`),
});

db.authenticate()
    .then(() => console.log('Успішне підключення до бази даних'))
    .catch((err) => console.error('Помилка підключення до бази даних:', err));

module.exports = db;
