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
            Promise.all([
                Course.find({}).sortable(req),
                Course.countDeleted()
            ])
                .then(([courses, num]) =>
                    res.render("me/stored-courses", {
                        num,
                        courses: multipleMongooseToObject(courses)
                    })
                ).catch(next);
        },

        // [GET] /me/trash/courses
        trashCourses(req, res, next) {
            Promise.all([Course.findDeleted({}), Course.count()])
                .then(([courses, num]) =>
                    res.render("me/trash-courses", {
                        num,
                        courses: multipleMongooseToObject(courses)
                    })
                ).catch(next);
        },

        // [GET] /me/stored/news
        storedNews(req, res, next) {
            res.render("news")
        }
    }
}

module.exports = MeController();
