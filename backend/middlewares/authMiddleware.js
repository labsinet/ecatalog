const jwt = require('jsonwebtoken');
const secretKey = 'HkjhgHJglkHG&#96puihKLJ(87yjhL#y';

exports.authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Необхідна авторизація' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: 'Неприпустимий токен' });
    }
};
