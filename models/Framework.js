const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  user: String,
  rating: Number,
  comment: String,
});

const FrameworkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  ratings: [RatingSchema],
});

module.exports = mongoose.model("Framework", FrameworkSchema);
