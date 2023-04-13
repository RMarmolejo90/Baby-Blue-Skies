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
      await axios.post('http://localhost:3001/', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      }) .then (function (response) {
        alert('Thanks for joining our email list! Your email has been successfully added!');
        console.log(response)
      }) .catch (function (error) {
        console.log (error)
      });
      formik.resetForm();
    }
    
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
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
