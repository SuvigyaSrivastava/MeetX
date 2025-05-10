const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

exports.bookActivity = async (req, res) => {
  const { activityId } = req.body;
  try {
    const activity = await Activity.findById(activityId);
    if (!activity) return res.status(404).json({ msg: 'Activity not found' });

    const booking = new Booking({ user: req.user, activity: activityId });
    await booking.save();
    res.json({ msg: 'Activity booked successfully' });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user }).populate('activity');
    res.json(bookings);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
