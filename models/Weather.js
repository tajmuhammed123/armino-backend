const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: { type: String, required: true, index: true },
  temperature: { type: Number, required: true },
  description: { type: String, required: true },
  icon: String,
  date: { type: String, required: true, index: true },
  feels_like: Number,
  sunset: String,
  humidity: Number,
  wind_speed: Number,
  created_at: { type: Date, default: Date.now }
});

// Compound index for performance
weatherSchema.index({ city: 1, date: 1 });

module.exports = mongoose.model('Weather', weatherSchema);