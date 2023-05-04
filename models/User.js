const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone_number: { type: String, required: true },
  cs_age: { type: Number, required: true },
  cs_amount: { type: Number, required: true },
  cs_gender: { type: String, enum: ['Male', 'Female'], required: true },
});
mongoose.models = {}

module.exports = mongoose.model('User', userSchema);
