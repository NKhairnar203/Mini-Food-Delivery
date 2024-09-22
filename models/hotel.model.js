const mongoose = require("mongoose");

const dishesSchema = new mongoose.Schema({
  dishName: String,
  price: Number,
  rating: String,
});


const dishesModel = mongoose.model("Dishe",dishesSchema);

module.exports = dishesModel;
