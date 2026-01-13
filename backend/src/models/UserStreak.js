const mongoose = require("mongoose");

module.exports = mongoose.model("UserStreak", new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  currentStreak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  lastCompletedDate: Date
}));
