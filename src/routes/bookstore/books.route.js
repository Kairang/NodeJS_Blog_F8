/**
 * @Kairang NodeJs 18/04/2023
 * @returns books router
 */

const router = require('express').Router();
const BooksController = require('../../app/controllers/BooksController');

// ADD NEW BOOK
router.post('/', BooksController.addNewBook);

// GET ALL BOOKS
router.get('/', BooksController.getAllBooks);

// GET BOOK BY ID
router.get('/:id', BooksController.getBookById);

// UPDATE BOOK BY ID
router.put('/:id', BooksController.updateBook);

// DELETE BOOK BY ID
router.delete('/:id', BooksController.deleteBook);

module.exports = router;
