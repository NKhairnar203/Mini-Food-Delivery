const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  name: String,
  workingTime: String,
  totalTips: Number,
  rating: String,
});

const agentModel = mongoose.model("Agent", agentSchema);

module.exports = agentModel;
