const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../config/.env') });
const mongoose = require('mongoose');

// // load env variables
// if (process.env.NODE_ENV != "production"){
//     require('dotenv').config({path:"../config/.env"});
// }

// const db = require(process.env.SECRET_KEY);

// Connect to DB
async function connectToDB(){
    try{
        console.log(process.env.SECRET_KEY);
        await mongoose.connect(process.env.SECRET_KEY, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("connected to database");
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectToDB;
