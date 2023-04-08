const email = require('../models/emails');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());

// Subscribe (Create email)
// userEmail needs to have whitespace removed immediately after the user enters an email
// this needs to be done on the front-end, inside the event handler, with the .trim() method
// to keep the trim as early as possible for consistent data format
const subscribe = async (req, res) => {
    const { userEmail } = req.body;
    if (!userEmail) {
        return res.status(400).send('Email address is required');
    }
    try {
        const duplicateEmail = await email.findOne({ email: userEmail });
        if (duplicateEmail) {
            return res.status(400).send('This email has already subscribed to our email list');
        }
        const newEmail = new email({ email: userEmail });
        await newEmail.save();
        res.send(`Thank you for subscribing! ${userEmail} has been added to our email list`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};
   
// Unsubscribe (delete email)

const unsubscribe = async (req, res) => {
    // find email in db
    const emailToDelete = req.body.email
    // Make sure the email exists in the database
    try {
        const result = await email.findOne({ email: emailToDelete });
        if (result === null) {
            res.json("Oops, we couldn't find that email. Check the spelling, and try again.");
            return;
        }
        // delete email
        await email.findOneAndDelete({ email: emailToDelete });
        // respond with confirmation
        res.json('Successfully Unsubscribed from our Emailing List');
    } catch (error) {
        console.log(error);
        res.json('Oops! there was an error');
    }
}


module.exports = {
    unsubscribe: unsubscribe,
    subscribe: subscribe,
}