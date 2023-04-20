/**
 * @Kairang NodeJs 18/04/2023
 * @returns books modal
 */

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    publishDate: {
        type: String,
        required: true
    },
    types: {
        type: [String]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Book', BookSchema);
