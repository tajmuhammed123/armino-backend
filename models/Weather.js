const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
  city: { type: String, required: true, index: true },
  temperature: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true, index: true },
  created_at: { type: Date, default: Date.now }
});


weatherSchema.index({ city: 1, date: 1 });

module.exports = mongoose.model('Weather', weatherSchema);
