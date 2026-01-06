// include mongoose module

// const mongoose = require('mongoose'); // mongooese package importing (old way)
import mongoose from 'mongoose'; // mongooese package importing(new way)

// define the schema

const contactSchema = new mongoose.Schema({
  name: String,
  phone: String
});

// create the model

const Contact = mongoose.model('Contact', contactSchema);

// module.exports = Contact; // exporting the model through module.exports->Contact (old way)

export default Contact; // exporting the model through export default->Contact (new way)