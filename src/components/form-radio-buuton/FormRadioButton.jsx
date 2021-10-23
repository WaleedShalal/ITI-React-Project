import React from 'react';
import { Field } from 'formik';
import FormErrorMessage from './../form/form-error-message/FormErrorMessage';
import './FormRadioButton.css';

function FormRadioButton({ name, label, options }) {
  return (
    <div className='form__radio d-flex flex-column w-50 align-items-start'>
      <label htmlFor={name} className=' text-white text-capitalize'>
        {label}
      </label>
      <Field name={name}>
        {(formikField) => {
          return (
            <div className='text-white d-flex justify-content-around w-100'>
              {options.map((option) => {
                return (
                  <div key={option.id}>
                    <label htmlFor={option.value} className='pe-2'>
                      {option.value}
                    </label>
                    <input
                      className='input__style '
                      type='radio'
                      id={option.value}
                      {...formikField.field}
                      value={option.value}
                      checked={option.value === formikField.field.value}
                    />
                  </div>
                );
              })}
            </div>
          );
        }}
      </Field>
      <div className='d-flex w-100'>
        <FormErrorMessage className='w-100' name={name} />
      </div>
    </div>
  );
}

export default FormRadioButton;
