const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Public routes — NO auth middleware
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
