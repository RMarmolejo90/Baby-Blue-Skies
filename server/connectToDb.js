const mongoose = require('mongoose');

// load env variables
if (process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

// Connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/myapp');

