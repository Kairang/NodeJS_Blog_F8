/**
 * @Kairang NodeJs 18/04/2023
 * @returns books controller
 */

const Book = require('../models/books.model');
const Author = require('../models/authors.modal');

const booksController = {
    // ADD NEW BOOK
    addNewBook: async (req, res, next) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();

            if (req.body.author) {
                const author = Author.findById(req.body.author);
                // author.books.push(savedBook._id);
                // await author.save();

                // Case 2
                await author.updateOne({ $push: { books: savedBook._id } });
            }

            res.status(201).json(savedBook);
        } catch (error) {
            next(error);
        }
    },

    // GET ALL BOOKS
    getAllBooks: async (req, res, next) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (error) {
            next(error);
        }
    },

    // GET BOOK BY ID
    getBookById: async (req, res, next) => {
        try {
            const book = await Book.findById(req.params.id).populate('author');
            res.status(200).json(book);
        } catch (error) {
            next(error);
        }
    },

    // UPDATE BOOK
    updateBook: async (req, res, next) => {
        try {
            const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(book);
        } catch (error) {
            next(error);
        }
    },

    // DELETE BOOK
    deleteBook: async (req, res, next) => {
        try {
            await Author.updateMany(
                { books: req.params.id },
                { $pull: { books: req.params.id } }
            )
            const book = await Book.findByIdAndDelete(req.params.id);
            res.status(200).json(book);
        } catch (error) {
            next(error);
        }
    },
}

module.exports = booksController;
