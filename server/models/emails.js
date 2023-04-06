const mongoose = require('mongoose');

// Create Schema for emails
const emailSchema = new Schema({
    email: { 
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
      }
});

const emailSubscription = mongoose.model('email', emailSchema);

module.exports = emailSubscription;

