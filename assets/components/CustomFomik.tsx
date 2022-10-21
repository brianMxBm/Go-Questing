import React from 'react';
import { Formik } from 'formik';

export interface customFormType {
  children: JSX.Element | JSX.Element[];
  initialValues?: any; //TODo: This is an issue.
  validationSchema?: any; //TODO: This is an issue.
  onSubmit?: any; //TODO: This is an issue.
}

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
