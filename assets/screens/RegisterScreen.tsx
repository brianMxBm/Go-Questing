import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { ErrorResponse, FormValues } from '../../types/index';
import { Formik, yupToFormErrors } from 'formik';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import CustomFormik from '../components/CustomFomik';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  textDanger: {
    color: 'red'
  }
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const validationSchema = yup.object({
  name: yup.string().trim().required('Name Is Missing'),
  email: yup.string().email('Invalid Email!').required('Email Is Missing'),
  password: yup.string().trim().min(8, 'Password Is Too Short').required('Password Is Missing'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords Must Match')
});

function RegisterScreen() {
  //TODO: Add Navigation Prop
  const handleSignUp = (values: any, formikActions: any) => {
    //Executes when form is submitting.
    setTimeout(() => {
      formikActions.resetForm();
      formikActions.setSubmitting(false);
      //navigation.navigate('Login');
    }, 3000);
    console.log(values, formikActions);
  };

  return (
    //Add secureTextEntry as a prop to FormInput Component.
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Login</Text>
      <CustomFormik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}>
        <FormInput name="name" placeholderText="What Is Thy Name (lol)" />
        <FormInput name="email" placeholderText="What Is Thy Email" />
        <FormInput name="password" placeholderText="What Is Thy Password" />
        <FormInput name="confirmPassword" placeholderText="What Is Thy Password...Again.." />
        <SubmitButton title="Sign-Up" />
      </CustomFormik>
    </View>
  );
}

export default RegisterScreen;
