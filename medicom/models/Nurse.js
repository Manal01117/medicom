// models/Nurse.js
const mongoose = require('mongoose');

const nurseSchema = new mongoose.Schema({
  name: String,
  domains: [String],
  experience: Number,
  availability: Boolean,
  email: String,
  phone: String,
  password: String,
  bio: String,
});

module.exports = mongoose.model('Nurse', nurseSchema);
