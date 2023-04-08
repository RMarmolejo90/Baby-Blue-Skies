const email = require('../models/emails');

// Subscribe (Create email)
const createEmail = async (req, res) => {
    // fetch email from request body
    const newEmail = req.body.email
    // respond with email in json
    await res.json({ email: newEmail });
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
    createEmail: createEmail,
    unsubscribe: unsubscribe,
}