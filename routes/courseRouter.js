const express = require('express');
const router = express.Router();
const courseController = require('../controller/courseController');

router.post('/addCourses',courseController.addCourse);
router.get('/addStudentCourses', courseController.addStudentsToCourses);

module.exports = router;