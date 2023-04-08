const email = require('../models/emails');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

// Subscribe (Create email)
const subscribe = async (req, res) => {
    // fetch email from request body
    const newEmail = req.body.email
    // save the newEmail to the database
    await email.create({ email: newEmail }, (error) => { console.log(error); });
    // respond with email in json
    await res.send(`Thank You for subscribing! ${newEmail} has been added to our emailing list`);
}

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