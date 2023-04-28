const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema for emails
const emailSchema = new Schema({email: String});

console.log(emailSchema);

const emailAddress = mongoose.model('emailAddress', emailSchema);

module.exports = emailAddress;

