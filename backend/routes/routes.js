// Import express
const express = require("express");
const { login, getProfile, updateProfile } = require('../controllers/authController');
const { authenticate } = require('../middlewares/authMiddleware');
// Import Books Controller
const { 
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
    getBookNames
} = require("../controllers/Books.js");

// Init express router
const router = express.Router();

// Route get all products
router.get('/books', getBooks);
// Route get product by id
//router.get('/books/:id', getBookById);
// Route create a new product
router.post('/books', authenticate,createBook);
// Route update product by id
router.put('/books/:id',authenticate, updateBook);
// Route delete product by id
router.delete('/books/:id',authenticate, deleteBook);
router.get('/books/search/:bookname', getBookNames);

router.post('/login', login);
router.get('/profile', authenticate, getProfile);
router.put('/profile', authenticate, updateProfile);

// export router
module.exports = router;
