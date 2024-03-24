// Import express
import express from "express";
// Import Books Controller
import { 
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
    getBookNames
 } from "../controllers/Books.js";
 
 // Init express router
const router = express.Router();
 
// Route get all products
router.get('/books', getBooks);
// Route get product by id
//router.get('/books/:id', getBookById);
// Route create a new product
router.post('/books', createBook);
// Route update product by id
router.put('/books/:id', updateBook);
// Route delete product by id
router.delete('/books/:id', deleteBook);
router.get('/books/search/:bookname', getBookNames);
 
// export router
export default router;