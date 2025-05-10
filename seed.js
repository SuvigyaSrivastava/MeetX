// seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Import your Activity model
const Activity = require('./models/Activity');

// Sample activities to seed (title instead of name)
const activities = [
  {
    title: 'Central Park Jog',
    description: 'Morning jog in Central Park.',
    category: 'outdoor',
    location: 'NYC',
    date: '2025-05-20',
    time: '07:00 AM',
  },
  {
    title: 'Online Coding Bootcamp',
    description: 'Full-stack web development bootcamp.',
    category: 'education',
    location: 'Online',
    date: '2025-06-01',
    time: '10:00 AM',
  },
  {
    title: 'Art Gallery Visit',
    description: 'Visit to the modern art gallery.',
    category: 'indoor',
    location: 'NYC',
    date: '2025-05-25',
    time: '02:00 PM',
  },
];

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB Atlas');

    // Clear existing activities
    await Activity.deleteMany({});
    console.log('🗑️ Cleared existing activities');

    // Insert new activities
    await Activity.insertMany(activities);
    console.log('🌱 Activities seeded successfully');

    mongoose.connection.close();
    console.log('🔌 Connection closed');
  })
  .catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err);
    process.exit(1);
  });
