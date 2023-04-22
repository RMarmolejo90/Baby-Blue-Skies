
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
    credentials: true,
}));
// load env variables
if (process.env.NODE_ENV != "production"){
    require("dotenv").config();
}

// Connect to database
try{
     connectToDb();
} catch(err) {
    console.error(error);
}

// // Set the MIME type header for the JavaScript file
// app.use('/static', express.static(path.join(__dirname, '/front-end'), {
//     setHeaders: function (res, path) {
//       if (path.endsWith('.jsx')) {
//         res.setHeader('Content-Type', 'text/javascript');
//       }
//     }
//   }));

const path = require('path');

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '..', 'front-end', 'dist')));

// Serve the index.html file for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'front-end', 'dist', 'index.html'));
});


// Create email (write to database)
app.post('/', emailController.subscribe );

// Delete (unsubscribe)
app.delete('/unsubscribe', emailController.unsubscribe);

// Start Server
app.get('/', (req, res) => {
    const PORT = process.env.PORT;
    res.send(`server on port ${PORT}`);
  })

try {
    app.listen(process.env.PORT);

} catch(err) {
    console.error(error);
}
