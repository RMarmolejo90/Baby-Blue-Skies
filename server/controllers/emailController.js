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
    // delete email

    // respond with confirmation
}