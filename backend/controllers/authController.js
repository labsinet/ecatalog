const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Sequelize модель
const secretKey = 'HkjhgHJglkHG&#96puihKLJ(87yjhL#y';

// Вхід
exports.login = async (req, res) => {
    const { email, password } = req.body;
    //const user = await User.findAll({ where: { email } });
    //console.log(user.every(user => user instanceof User)); // true
    //console.log('All users:', JSON.stringify(user, null, 2));

    try {
        //console.log(email);
        const userpassword = await bcrypt.hash(password, 10);
        console.log(userpassword);
        const user = await User.findOne({ where: { email } });
           //console.log(user);
        if (!user) {
            return res.status(401).json({ message: 'Невірний email ' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Невірний  пароль' });
        }

       const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });
       res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Помилка сервера' });
    }
};

// Отримання профілю
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: ['id', 'name', 'email'],
        });
        if (!user) {
            return res.status(404).json({ message: 'Користувач не знайдений' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Помилка сервера' });
    }
};

// Оновлення профілю
exports.updateProfile = async (req, res) => {
    const { name, email } = req.body;

    try {
        const [updatedRows] = await User.update(
            { name, email },
            { where: { id: req.user.id } }
        );

        if (updatedRows === 0) {
            return res.status(404).json({ message: 'Користувач не знайдений' });
        }

        const updatedUser = await User.findByPk(req.user.id, {
            attributes: ['id', 'name', 'email'],
        });
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: 'Помилка сервера' });
    }
};
