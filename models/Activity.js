// models/Activity.js

const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model('Activity', activitySchema);
