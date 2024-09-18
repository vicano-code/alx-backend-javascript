const express = require('express');

const router = express.Router();
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

// Link the route '/' to AppController
router.get('/', AppController.getHomepage);

// Link the route '/students' to StudentsController
router.get('/students', StudentsController.getAllStudents);

// Link the route '/students/:major' to StudentsController
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
