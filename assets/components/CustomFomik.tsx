import React from 'react';
import { Formik } from 'formik';
import { customFormType } from '../../types';

//Custom Formik component allows for centralizing formik and utilizing it in any other
const CustomFormik = ({ children, initialValues, validationSchema, onSubmit }: customFormType) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => {
        return children;
      }}
    </Formik>
  );
};

export default CustomFormik;
