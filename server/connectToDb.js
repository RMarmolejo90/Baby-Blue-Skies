const mongoose = require('mongoose');

// load env variables
if (process.env.NODE_ENV != "production"){
    require('dotenv').config({ path: '../config/.env' });
}

// Connect to DB
async function connectToDB(){
    try{
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected to database");
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectToDB;
