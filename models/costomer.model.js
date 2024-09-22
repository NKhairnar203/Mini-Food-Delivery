const mongoose = require("mongoose");

const costomerSchema = new mongoose.Schema({
  name: String,
  foodPreference: Number,
  walletBalance: {
    type: Number,
    default: 2000,
  },
});

const costomerModel = mongoose.model("Costomer", costomerSchema);

module.exports = costomerModel;
