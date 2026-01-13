const mongoose = require("mongoose");

module.exports = mongoose.model("Task", new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  difficulty: String,
  assignedDate: Date
}));
