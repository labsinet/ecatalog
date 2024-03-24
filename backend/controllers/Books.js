// Import Product Model
import Books from "../models/Books.js";
import { Sequelize } from "sequelize";
const Op = Sequelize.Op;
// Get all products
export const getBooks = async (req, res) => {
    try {
        const product = await Books.findAll({
            order: [['year', 'DESC']], // Sort by year in descending order
            limit: 10 // Limit the results to 10 records
        });
        res.send(product);
    } catch (err) {
        console.log(err);
    }
}
 
// Get product by id
export const getBookById = async (req, res) => {
    try {
        const product = await Books.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(product[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// Create a new product
export const createBook = async (req, res) => {
    try {
        await Books.create(req.body);
        res.json({
            "message": "Book Created"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Update product by id
export const updateBook = async (req, res) => {
    try {
        await Books.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Book Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
 
// Delete product by id
export const deleteBook = async (req, res) => {
    try {
        await Books.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Book Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}

//search books by name
export  const getBookNames = async (req, res) => {
    try {
        const  name  = req.params.bookname;

        const books = await Books.findAll({
            where: { 
                booksname: { 
                    [Op.like]: `%${name}%` // Correct interpolation
                }
            },
            order: [['year', 'DESC']] // Sort by year in descending order
            
                 
        });

        res.json(books);
    } catch (error) {
        console.error("Error fetching book names:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

