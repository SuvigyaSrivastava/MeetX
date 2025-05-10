// routes/activities.js

const express = require('express');
const router = express.Router();
const { getActivities, bookActivity } = require('../controllers/activitiesController');

// Public route to list all activities
router.get('/', getActivities);

// Protected route to book an activity (Requires JWT auth)
router.post('/book', bookActivity);

module.exports = router;
