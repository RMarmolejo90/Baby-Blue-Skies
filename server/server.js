const express = require('express');
const app = express();

// Config
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(cookieParser());

// load env variables
if (process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
// Import Dependencies
const cors = require('cors');
const connectToDb = require('./connectToDb');

// Connect to database
connectToDb();

// Create email (write to database)

// Read (check for duplicate emails in the database)

// Delete (unsubscribe)

// Start Server
try {
    app.listen(process.env.PORT);
} catch(err) {
    console.error(error);
}
