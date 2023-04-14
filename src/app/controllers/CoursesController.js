/**
 * @Kairang NodeJs 11/04/2023
 * @Modified 13/04/2023 - update CRUD course
 * @returns coursesController
 */

const { multipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
const Course = require('../models/course.model');

function coursesController() {
    return {
        // [GET ALL] /courses
        getAll(req, res, next) {
            Course.find()
                .then(courses => res.render('courses/allCourse',
                    { courses: multipleMongooseToObject(courses) }))
                .catch(next);
        },

        // [GET] /courses/:slug
        getCourse(req, res, next) {
            Course.findOne({ slug: req.params.slug })
                .then(course => res.render('courses/course',
                    { course: mongooseToObject(course) }))
                .catch(next);
        },

        // [GET] /courses/create
        createCourse(req, res, next) {
            res.render('courses/create');
        },

        // [GET] /courses/edit/:id
        editCourse(req, res, next) {
            Course.findById(req.params.id)
                .then(course => res.render('courses/edit', {
                    course: mongooseToObject(course)
                }))
                .catch(next);
        },

        // [PUT] /courses/:id
        update(req, res, next) {
            Course.updateOne({ _id: req.params.id }, req.body)
                .then(() => res.redirect('/me/stored/courses'))
                .catch(next);
        },

        // [DELETE] /courses/:id
        destroy(req, res, next) {
            Course.deleteOne({ _id: req.params.id })
                .then(() => res.redirect('back'))
                .catch(next);
        },

        // [POST] /courses/store
        store(req, res, next) {
            const formData = { ...req.body };
            formData.image = `https://img.youtube.com/vi/${req.body.videoId}/hqdefault.jpg`;

            const course = new Course(formData);

            course.save()
                .then(() => res.redirect('/courses'))
                .catch(err => { console.log(err) })
        }
    }
}

module.exports = coursesController();