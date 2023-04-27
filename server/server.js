
// Import Dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const connectToDb = require('./connectToDb');
const emailController = require('./controllers/emailController');

// Config
app.use(express.json());
app.use(cors({
    origin: true,
}));
// load env variables
// if (process.env.NODE_ENV != "production"){
//     require('dotenv').config({ path: '../config/.env' });
// }

// Connect to database
try{
     connectToDb();
} catch(error) {
    console.error(error);
}

// Set up rate limiter: maximum of twenty requests per minute
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 25,
});
// Apply rate limiter to all requests
app.use(limiter);

// Create email (write to database)
app.post('/', emailController.subscribe );

// Delete (unsubscribe)
app.delete('/unsubscribe', emailController.unsubscribe);

// GET Root Request
app.get('/', (req, res) => {
    try {
      const PORT = process.env.PORT;
      res.send(`server on port ${PORT}`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
// Catch 404 errors
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

// Error handling middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});



// Start Server
try {
    app.listen(process.env.PORT);

} catch(error) {
    console.error(error);
}