const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema for emails
const emailSchema = new Schema({
    email: {
      type: String,
      unique: true,
  }
});

const email = mongoose.model('email', emailSchema);

module.exports = email;

