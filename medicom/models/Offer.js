const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  medicalConditions: String,
  allergies: String,
  currentMedications: String,
  currentSymptoms: String,
  dateOfBirth: String,
  fullName: String,
  gender: String,
  phoneNumber: String,
  address: String,
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;
