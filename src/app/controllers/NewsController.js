/**
 * @Kairang NodeJs 05/04/2023
 * @returns newsController
 * @modifued 11/04/2023
 */
const Course = require('../models/course.model'); //Modified

function newsController() {
    return {
        // [GET] /news
        index(req, res, next) {
            Course.find()
                .then(courses => res.json(courses))
                .catch(next);

            // res.render('news');
        },

        // [GET] /news/:slug
        show(req, res) {
            res.write('<h1>NEWS PAGE WITH SLUG</h1>');
            res.end();
        }
    }
}

module.exports = newsController();
