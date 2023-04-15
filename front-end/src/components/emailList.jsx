import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const EmailForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
    }), 
    onSubmit: async (values) => {
      console.log('Sending POST request to /');
      console.log('Email:', values.email);
      const res = await axios.post('http://localhost:3001/', { userEmail: values.email }, {
        headers: {
          'Content-Type': 'application/json'
        },
      }) .then (function (response) {
        alert('Thank you for subscribing!')
        console.log(values)
        console.log(response)
      }) .catch (function (error) {
        console.log (error)
        if (error.response.status === 409){ alert('This email is already subscribed')}
      });
      formik.resetForm();
    }
    
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          className='border-2 rounded-lg'
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailForm;
