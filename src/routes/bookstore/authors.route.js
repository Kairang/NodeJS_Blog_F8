/**
 * @Kairang NodeJs 18/04/2023
 * @returns authors router
 */

const router = require('express').Router();
const AuthorsController = require('../../app/controllers/AuthorsController');

// ADD NEW AUTHOR
router.post('/', AuthorsController.addNewAuthor);

// GET ALL AUTHORS
router.get('/', AuthorsController.getAllAuthors);

// GET AUTHOR BY ID
router.get('/:id', AuthorsController.getAuthorById);

// UPDATE AUTHOR BY ID
router.put('/:id', AuthorsController.updateAuthor);

// DELETE AUTHOR BY ID
router.delete('/:id', AuthorsController.deleteAuthor);

module.exports = router;
