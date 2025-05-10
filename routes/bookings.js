const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');

// Protected routes — REQUIRE auth
router.post('/book', auth, bookActivity);
router.get('/my', auth, getMyBookings);

module.exports = router;
