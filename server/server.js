
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
