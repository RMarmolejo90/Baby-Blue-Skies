import { useState } from 'react';
import { Formik } from 'formik';
const axios = require('axios');


const [inputEmail, setInputEmail] = useState('');

const submitEmail = (e) => {
  const email = e.target.value;
  const formatEmail = email.toLowerCase().trim()
}


export default function EmailList() {
  return (
    <div>
        {/* // form with input for email, and submit Button
        // small unsubscribe link
        // paragraph about signing up for emails */}
        <form action="">
          <input value="email" type="email" name="userEmail" id="email" />
          <button type='submit'>Subscribe</button>
        </form>
    </div>
  )
}
