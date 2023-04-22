const mongoose = require('mongoose');

// load env variables
if (process.env.NODE_ENV != "production"){
    require("dotenv").config({path: '/'});
}

// Connect to DB
async function connectToDB(){
    try{
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            createIndexes: true
        });
        console.log("connected to database");
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectToDB;
