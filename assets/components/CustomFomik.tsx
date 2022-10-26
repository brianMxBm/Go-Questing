import React from 'react';
import { Formik, FormikHandlers, FormikHelpers, FormikProps } from 'formik';

export interface customFormType {
  children: JSX.Element | JSX.Element[];
  initialValues: {
    //TODO: Partial Type, this isn't good. Come back and refactor entire component. This isn't intuitive at all.
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    postTitle?: string;
    compensation?: string;
    description?: string;
    jobCategory?: string;
    location?: string;
  };
  validationSchema: any; //TODO: Come back and refactor entire component. This isn't intuitive at all.
  onSubmit: any; //TODO: Come back and refactor entire component. This isn't intuitive at all.
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
