const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');  // Assuming you have an auth middleware

// Example protected route
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ msg: 'This is a protected route' });
});

module.exports = router;
