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
      console.log('Sending DELETE request to /unsubscribe');
      console.log('Email:', values.email);
      const res = await axios.delete('http://localhost:3001/unsuscribe', { userEmail: values.email }, {
        headers: {
          'Content-Type': 'application/json'
        },
      }) .then (function (response) {
        alert('Success! Email has been removed')
        console.log(values)
        console.log(response)
      }) .catch (function (error) {
        console.log (error)
        if (error.response.status === 409){ alert('Email Adress Not Found')}
      });
      formik.resetForm();
    }
    
  });

  return (
    <div className='flex items-center justify-center p-8'>
      <form onSubmit={formik.handleSubmit}>
        {/* <label htmlFor="email">Email Address:</label> */}
        <input
          className='border-2 rounded-lg px-4 mx-4'
          id="emailDelete"
          name="email"
          type="email"
          placeholder='enter your email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <button className='py-1 px-2 m-4 tracking-side leading-6 text-sm bg-red-500 font-semibold border rounded-xl' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailForm;
