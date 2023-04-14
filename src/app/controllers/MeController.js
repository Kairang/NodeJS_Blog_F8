/**
 * @Kairang NodeJs 13/04/2023
 * @returns coursesController
 */

const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../models/course.model');

function MeController() {
    return {
        // [GET] /me/stored/courses
        storedCourses(req, res, next) {
            Course.find({})
                .then((courses) => res.render("me/stored-courses", {
                    courses: multipleMongooseToObject(courses)
                }))
                .catch(next);
        },

        // [GET] /me/stored/news
        storedNews(req, res, next) {
            res.render("news")
        }
    }
}

module.exports = MeController();
