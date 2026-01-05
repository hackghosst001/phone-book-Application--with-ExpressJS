// include mongoose module
const mongoose = require('mongoose'); // mongooese package importing

// define the schema
const contactSchema = new mongoose.Schema({
  name: String,
  phone: String
});

// create the model
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact; // exporting the model through module.exports->Contact