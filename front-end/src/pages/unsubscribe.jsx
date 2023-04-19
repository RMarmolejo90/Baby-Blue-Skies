import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
      const res = await axios.delete('http://www.babyblueskiestravel.com/unsuscribe', { emailToDelete: values.email }, {
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
    <div>
        <Navbar />
            <div className='flex flex-col items-center justify-center p-8'>
                <h3 className='font-bold text-xl text-primary-dark p-4'>Unsubscribe From Emails</h3>
                <p className='py-4 px-12'>We're sorry to see you go and we hope that you've enjoyed receiving our special travel deals.
                 If you would like to unsubscribe from our emails, please fill out the form below with your email address and click the "unsubscribe" button.
                We understand that everyone's travel preferences are unique and we hope that we were able to inspire you with our travel offers. 
                If there's anything we could have done better or if you have any feedback, please don't hesitate to let us know! We're always looking for ways to improve our service and your input is valuable to us.
                </p>
                <p className='py-4 px-12'>If you have any questions or concerns about your future travel plans, our team is here to assist you. You can contact us using the information provided on this page and we'll be happy to help.</p>

                <p className='py-10 px-12'>Thank you for considering us as your travel agency and we wish you all the best on your future journeys!</p>
                <form action='unsubscribe' onSubmit={formik.handleSubmit}>
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
                    <button className='py-1 px-2 m-4 tracking-side leading-6 text-sm bg-button-color font-semibold border rounded-xl' type="submit">Submit</button>
                </form>
            </div>
        <Footer />
    </div>
  );
};

export default EmailForm;
