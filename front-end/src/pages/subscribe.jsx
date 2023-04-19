import React from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';


const Subscribe = () => {
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
        <Navbar />
        <Fade cascade damping={0.5} duration={3000}>
            <div className='border border-white-shade rounded-xl px-20 py-4 shadow-inner-xl shadow-md bg-secondary-light'>
            <h1 className='text-primary-dark py-8 text-xl font-bold'>Finding the best travel deals and special offers takes work.</h1>
            <p className='py-8'>
                But don't worry, we've got your back! Let us put in the effort for you and update you whenever we find a good deal.
            </p>
            <p className='py-8'>
                Our service won't cost you a dime, and you'll have the chance to grab the deal before anyone else. We won't bombard you with emails or share your information either. 
                We're all about helping you find the perfect getaway.
            </p>
            <p className='py-8'>
                Signing up is easy - just submit your email below, and you're all set. And if you ever want to cancel your subscription, no problem! Just click the unsubscribe link at the bottom of the page, and it's just as easy.
            </p>
            <form onSubmit={formik.handleSubmit} className='p-4 flex flex-col items-center justify-center'>
                <label className='pb-6 font-semibold text-lg' htmlFor="email">Sign Up For Travel Deals</label> 
                <input
                className='border-2 rounded-lg px-4 m-4 tracking-side leading-6 text-center'
                id="email"
                name="email"
                type="email"
                placeholder='enter your email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
                <button className='py-2 px-10 mt-8 m-4 tracking-side leading-6 text-sm bg-button-color font-semibold border rounded-md' type="submit">Submit</button>
            </form>
            </div>
        </Fade>
        <Footer />
    </div>
  )
}

export default Subscribe;