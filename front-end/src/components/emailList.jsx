import React from 'react';
import { useFormik, Form } from 'formik';
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
      const res = await axios.post('/', values);
      console.log(res);
      alert('Thanks for joining our email list! Your email has been successfully added!');
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
