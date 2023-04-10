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
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(formik.values);
  return (
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
  );
};

export default EmailForm;