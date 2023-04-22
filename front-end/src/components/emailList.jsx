import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Slide } from 'react-awesome-reveal';


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
      const res = await axios.post('http://www.babyblueskiestravel.com/', { userEmail: values.email }, {
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
    <div className='flex flex-col items-center justify-center lg:p-20 bg-secondary-light'>
      <Slide left duration={300} >
        <h3 className='text-primary-dark font-semibold text-xl p-4'>Want to stay up-to-date on the latest travel deals and offers?</h3>
        <p className='p-4'>Sign up for our email newsletter today!
          By subscribing to our email list, Be the first to know about the best travel deals! 
          Sign up for our newsletter to receive updates on the latest discounts and special offers.
        </p>
        <p className='p-4 py-8'>
          We promise not to overload your inbox with emails or share your information with third parties. 
          You can unsubscribe at any time by clicking the "unsubscribe" link at the bottom of our emails.
        </p>
        
        <div className='border border-white-shade rounded-lg px-6 py-4 shadow-inner-xl shadow-md bg-primary-dark'>
          <form onSubmit={formik.handleSubmit} className='p-4 flex flex-col items-center justify-center'>
            <label className='pb-6 font-semibold text-lg accent-accent-color' htmlFor="email">Sign Up For Travel Deals</label> 
            <input
              className='border-2 rounded-lg px-4 m-4 tracking-side leading-6 text-center accent-accent-color'
              id="email"
              name="email"
              type="email"
              placeholder='enter your email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <button className='py-2 px-10 mt-8 m-4 tracking-side leading-6 text-sm bg-button-color font-semibold border rounded-sm' type="submit">Submit</button>
          </form>
        </div>
      </Slide>
    </div>
  );
};

export default EmailForm;
