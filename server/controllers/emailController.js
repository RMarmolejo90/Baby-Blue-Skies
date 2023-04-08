const email = require('../models/emails');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

// Subscribe (Create email)
const subscribe = async (req, res) => {
    // fetch email from request body
    const Email  = req.body.trim();      
    try {
        const duplicateEmail = await email.findOne(Email);
        if (duplicateEmail) {
        return res.status(400).send('This email has already subscribed to our email list');
        }
        const newEmail = new email(Email);
        await newEmail.save();
        res.send(`Thank you for subscribing! ${newEmail} has been added to our email list`);
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
    if (email.findOne(emailToDelete)){
        // delete email
        try{
            await email.findOneAndDelete(emailToDelete);
            // respond with confirmation
            res.json('Successfully Unsubscribed from our Emailing List');
        } catch(err) {
            console.log(error);
            res.json('Oops! there was an error');
        }
    } else {
        res.json("Oops, we couldn't find that email. Check the spelling, and try again.");
    }
}

module.exports = {
    unsubscribe: unsubscribe,
    subscribe: subscribe,
}