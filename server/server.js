
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
if (process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

// Connect to database
try{
     connectToDb();
} catch(error) {
    console.error(error);
}

// Create email (write to database)
app.post('/post', emailController.subscribe );

// Delete (unsubscribe)
app.delete('/unsubscribe', emailController.unsubscribe);

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
app.get('/', (req, res) => {
    const PORT = process.env.PORT;
    res.send(`server on port ${PORT}`);
    console.log(req.url);
    console.log(res.PORT);
  })

try {
    app.listen(process.env.PORT);

} catch(error) {
    console.error(error);
}
