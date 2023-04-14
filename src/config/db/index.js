const mongoose = require('mongoose');

async function conect() {
    const URL = 'mongodb://localhost:27017/f8_education_dev';

    try {
        await mongoose.connect(URL);

        console.log("Conect successfully!");
    } catch (e) {
        console.log("Conect failure!");
    }
}

module.exports = { conect };
