import React from 'react';
import { ErrorMessage } from 'formik';
import './FormErrorMessage.css';

function FormErrorMessage({ name }) {
  return (
    <ErrorMessage name={name}>
      {(errMessage) => {
        return (
          <div className='error__message px-2 w-100 bg-warning text-danger text-capitalize'>
            {errMessage}
          </div>
        );
      }}
    </ErrorMessage>
  );
}

export default FormErrorMessage;
