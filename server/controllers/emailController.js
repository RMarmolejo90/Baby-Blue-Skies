const email = require('../models/emails');
//const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//app.use(bodyParser.json());

// Subscribe (Create email)

const subscribe = async (req, res) => {
    res.getHeaders();
    const { sub } = res.data;
    try {
        const duplicateEmail = await email.findOne({ email: sub });
        if (duplicateEmail) {
            return res.status(409).json({message:'This email is already subscribed'})
        } else {
        const newEmail = new email( sub );
        await newEmail.save();
        res.json({message: `Thank you for subscribing! ${sub} has been added to our email list`})}
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};
   
// Unsubscribe (delete email)

const unsubscribe = async (req, res) => {
    // find email in db
    const { emailToDelete } = req.body;
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
        res.json('Successfully Unsubscribed from emails');
    } catch (error) {
        console.log(error);
        res.json('Oops! there was an error');
    }
}


module.exports = {
    unsubscribe: unsubscribe,
    subscribe: subscribe,
}