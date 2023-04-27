const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema for emails
const emailSchema = new Schema({email: String});

const emailAddress = mongoose.model('emailAddress', emailSchema);

module.exports = emailAddress;

