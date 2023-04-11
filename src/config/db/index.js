const mongoose = require('mongoose');

async function conect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');

        console.log("Conect successfully!");
    } catch (e) {
        console.log("Conect failure!");
    }
}

module.exports = { conect };
