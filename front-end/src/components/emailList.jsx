import React from 'react';
import { useFormik } from 'formik';
import { Formik } from 'formik';
import { emailSchema } from '../../validations/EmailValidation';

export default function EmailForm() {
  
  const onSubmit = async (value, actions) => {
    console.log(value);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert(JSON.stringify(values, null, 2));
    actions.resetForm();
  }
  
  const { values, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
  initialValues: {
    email: '',
  },
  validationSchema: emailSchema,
   onSubmit });
  return (
    <div className="m-2">
      <Formik>
        <form onSubmit={onSubmit}>
          <label className='mx-2' htmlFor="email">Join Our Email List</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            values={values.email}
            placeholder='Enter your email'
            onBlur={handleBlur}
            className='mx-2 p-1 rounded-lg text-center'
          />
          <button disabled={isSubmitting} className='mx-1' type="submit">Submit</button>
          {/* 
          add this for the errors to display as a div
          {touched.email && errors.email ? (
            <div className='m-2 text-center'>{errors.email}</div>
          ) : null} */}
        </form>
      </Formik>
    </div>
  );
};