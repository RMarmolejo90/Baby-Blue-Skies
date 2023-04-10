import React from 'react';
import { useFormik } from 'formik';
import { emailSchema } from '../../validations/EmailValidation';
import * as Yup from 'yup';

const EmailForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: emailSchema,
    }),
    onSubmit: (values) => {
      console.log('submitted');
      console.log(formik.values);
      alert(JSON.stringify(values, null, 2));
    },
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
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default EmailForm;