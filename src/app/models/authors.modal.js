/**
 * @Kairang NodeJs 18/04/2023
 * @returns authors modal
 */

const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    BOD: {
        type: String,
        required: true
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ]
});

module.exports = mongoose.model('Author', AuthorSchema);
