/**
 * @Kairang NodeJs 11/04/2023
 * @returns courses route
 */

const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.createCourse);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.getCourse);
router.get('/edit/:id', coursesController.editCourse);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.destroy);
router.get('/', coursesController.getAll);

module.exports = router;