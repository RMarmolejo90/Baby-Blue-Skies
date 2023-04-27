const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema for emails
const emailSchema = new Schema({
    Subscriber: {
      type: JSON,
      unique: true,
      
  }
});

const email = mongoose.model('email', emailSchema);

module.exports = email;

