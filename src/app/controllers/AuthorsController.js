/**
 * @Kairang NodeJs 18/04/2023
 * @returns authors controller
 */

const Author = require('../models/authors.modal');
const Book = require('../models/books.model');

const authorsController = {
    // ADD NEW AUTHOR
    addNewAuthor: async (req, res, next) => {
        try {
            const newAuthor = new Author(req.body);
            const savedAuthor = await newAuthor.save();
            res.status(201).json(savedAuthor);
        } catch (error) {
            next(error);
        }
    },

    // GET ALL AUTHORS
    getAllAuthors: async (req, res, next) => {
        try {
            const authors = await Author.find();
            res.status(200).json(authors);
        } catch (error) {
            next(error);
        }
    },

    // GET AUTHOR BY ID
    getAuthorById: async (req, res, next) => {
        try {
            const author = await Author.findById(req.params.id).populate('books');
            res.status(200).json(author);
        } catch (error) {
            next(error);
        }
    },

    // UPDATE AUTHOR
    updateAuthor: async (req, res, next) => {
        try {
            const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).json(author);
        } catch (error) {
            next(error);
        }
    },

    //DELETE AUTHOR
    deleteAuthor: async (req, res, next) => {
        try {
            Book.updateMany(
                { author: req.params.id },
                { author: null }
            )
            const author = await Author.findByIdAndDelete(req.params.id);
            res.status(200).json(author);
        } catch (error) {
            next(error);
        }
    },
}

module.exports = authorsController;
