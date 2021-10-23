import React from 'react';
import { Field } from 'formik';

function FormCheckboxInput({ name, type, label }) {
  return (
    <div className='d-flex w-50 justify-content-between align-items-baseline mt-3'>
      <Field name={name}>
        {(formikField) => {
          return (
            <div className='d-flex w-100 justify-content-between align-items-baseline'>
              <label
                htmlFor={name}
                className='w-100 text-white text-capitalize'>
                {label}
              </label>
              <input
                className='input__style mb-3'
                type={type}
                id={name}
                {...formikField.field}
                defaultChecked={formikField.field.value}
              />
            </div>
          );
        }}
      </Field>
    </div>
  );
}

export default FormCheckboxInput;
