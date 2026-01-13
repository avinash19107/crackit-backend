const mongoose = require("mongoose");

module.exports = mongoose.model("UserTaskProgress", new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  taskId: mongoose.Schema.Types.ObjectId,
  status: String,
  completionPercentage: Number,
  markedAt: Date
}));
