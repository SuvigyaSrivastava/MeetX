// server.js
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/activities', require('./routes/activities'));
app.use('/api/bookings', require('./routes/bookings'));
// In server.js
app.use('/api/protected', require('./routes/protectedRoute'));  // Protect this route using JWT


const errorHandler = require('./middlewares/error');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
