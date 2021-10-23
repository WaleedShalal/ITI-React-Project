import React from 'react';
import { Field } from 'formik';
import FormErrorMessage from './../form-error-message/FormErrorMessage';
import './FormField.css';

function FormField({ name, type, label }) {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <div className='d-flex flex-column w-50 align-items-start'>
            <label htmlFor={name} className='w-100 text-white text-capitalize'>
              {label}
            </label>
            <input
              className='input__style w-100  mb-3 p-1'
              type={type}
              id={name}
              {...formikField.field}
              defaultChecked={formikField.field.value}
            />
            <div className='d-flex w-100'>
              <FormErrorMessage name={name} />
            </div>
          </div>
        );
      }}
    </Field>
  );
}

export default FormField;
