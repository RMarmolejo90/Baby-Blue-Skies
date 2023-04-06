const mongoose = require('mongoose');

// load env variables
if (process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/myapp');

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

