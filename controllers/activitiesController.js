// controllers/activitiesController.js

const Activity = require('../models/Activity'); // Assuming you have an Activity model

// Controller to list all available activities
exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Controller to book an activity
exports.bookActivity = async (req, res) => {
  const { activityId } = req.body;
  try {
    const activity = await Activity.findById(activityId);
    if (!activity) return res.status(400).json({ msg: 'Activity not found' });

    // Assuming you have a Booking model
    const booking = new Booking({
      userId: req.user.id, // from JWT token
      activityId,
      bookedAt: Date.now(),
    });

    await booking.save();
    res.status(200).json({ msg: 'Activity booked successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
