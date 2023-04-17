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
    <div className='flex flex-col items-center justify-center p-8 bg-secondary-light'>
      <h3 className='text-primary-dark font-semibold text-xl p-4'>Want to stay up-to-date on the latest travel deals and offers?</h3>
      <p className='p-4'>Sign up for our email newsletter today!
        By subscribing to our email list, Be the first to know about the best travel deals! 
        Sign up for our newsletter to receive updates on the latest discounts and special offers.
      </p>
      <p className='p-4'>
        We We promise not to overload your inbox with emails or share your information with third parties. 
        You can unsubscribe at any time by clicking the "unsubscribe" link at the bottom of our emails.
      </p>
      <p className='px-4 py-6'>
      Join our community of travelers and start planning your next adventure today!
      </p>
      <form onSubmit={formik.handleSubmit} className='p-4 flex flex-col items-center justify-center'>
        {/* <label htmlFor="email">Email Address:</label> */}
        <input
          className='border-2 rounded-lg px-4 mx-4 tracking-side leading-6'
          id="email"
          name="email"
          type="email"
          placeholder='enter your email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <button className='py-2 px-10 m-4 tracking-side leading-6 text-sm bg-green-400 font-semibold border rounded-xl' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailForm;
