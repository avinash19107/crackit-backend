const UserStreak = require("../models/UserStreak");

module.exports = async (userId) => {
  const today = new Date().toDateString();
  let streak = await UserStreak.findOne({ userId });

  if (!streak) {
    await UserStreak.create({ userId, currentStreak: 1, longestStreak: 1, lastCompletedDate: today });
    return;
  }

  if (streak.lastCompletedDate !== today) {
    streak.currentStreak += 1;
    streak.longestStreak = Math.max(streak.longestStreak, streak.currentStreak);
    streak.lastCompletedDate = today;
    await streak.save();
  }
};
