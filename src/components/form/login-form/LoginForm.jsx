import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './LoginForm.css';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
    rememberMe: false,
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Please Enter A Valid Email')
      .required('Please Enter Email'),
    password: yup
      .string()
      .min(8, 'Password Must Be At Least 8 Characters')
      .required('Please Enter Password'),
  });
  const onSubmit = (values) => alert(`Welcome "${values.email}""`);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className='login__form mt-5 p-3 w-75 mx-auto'>
      <div className='login__wrapper d-flex flex-column align-items-center p-5'>
        <label
          htmlFor='email'
          className='w-50 mx-auto text-white text-capitalize'>
          email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          {...formik.getFieldProps('email')}
          className='input__style w-50 mx-auto mb-3 p-1'
        />

        {formik.touched.email && formik.errors.email && (
          <div className='error__message px-2 w-50 bg-warning text-danger'>
            {formik.errors.email}
          </div>
        )}

        <label
          htmlFor='password'
          className='w-50 mx-auto text-white text-capitalize'>
          password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          {...formik.getFieldProps('password')}
          className='input__style w-50 mx-auto mb-3 p-1'
        />
        {formik.touched.password && formik.errors.password && (
          <div className='error__message px-2 w-50 bg-warning text-danger'>
            {formik.errors.password}
          </div>
        )}
        <div className='d-flex w-50  align-items-baseline'>
          <label htmlFor='rememberMe' className='text-white text-capitalize'>
            remember me
          </label>
          <input
            type='checkbox'
            id='rememberMe'
            name='rememberMe'
            defaultChecked={formik.values.rememberMe}
            {...formik.getFieldProps('rememberMe')}
            className='checkbox__input input__style mb-3 ms-auto'
          />
        </div>

        <button
          type='submit'
          className='login__btn btn btn-primary d-block mx-auto w-25 mt-4 text-capitalize'
          disabled={!formik.isValid}>
          login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
