// adminAccessRoutes.js
const express = require('express');
const {
  getStudentById,
  sendMeetingLink,
  getEventRegistrations,
} = require('../controllers/adminAccessController'); // Adjust path as needed
const { protectAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

// Route to get student details by ID
router.get('/studentDetail/:id', protectAdmin, getStudentById);

router.get('/studentEventRegistrations/:id', protectAdmin, getEventRegistrations);

// Route to send meeting link
router.post('/sendMeetingLink', protectAdmin, sendMeetingLink);

module.exports = router;
