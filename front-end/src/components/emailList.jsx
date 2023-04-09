import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
const axios = require('axios');


const [inputEmail, setInputEmail] = useState('');

// yup
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
  onSubmit: values => {
    alert(JSON.stringify(values, null, 2));
  },
});}


<Formik
       initialValues={{ email: ''}}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     ></Formik>

export default function EmailList() {
  return (
    <div>
        {/* // form with input for email, and submit Button
        // small unsubscribe link
        // paragraph about signing up for emails */}
        <form action="">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="userEmail" id="email" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email} />

          {formik.touched.email && formik.errors.email ? (
         <div>{formik.errors.email}</div>) : null}
          <button type='submit'>Subscribe</button>
        </form>
        
    </div>
  )
}
