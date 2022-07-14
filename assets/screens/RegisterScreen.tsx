import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';
import * as yup from 'yup';
import CustomFormik from '../components/CustomFomik';
import axios from 'axios';
import { IP } from '@env';
import colors from '../../theme/colors';

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

const validationSchema = yup.object().shape({
  name: yup.string().trim().required('Name Is Missing'),
  email: yup.string().email('Invalid Email!').required('Email Is Missing'),
  password: yup
    .string()
    .trim()
    .min(8, 'Password Is Too Short')
    .required('Password Is Required')
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
      'Password requires an uppercase letter, number and special character ¯_(ツ)_/¯ '
    ),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password')], 'Passwords Must Match')
    .required('Please Confirm Password')
});

function RegisterScreen() {
  //TODO: Add Navigation Prop
  const signUp = async (values: any, formikActions: any) => {
    try {
      const { data } = await axios.post(`http://${IP}:8000/api/user/create`, {
        ...values
      }); //Register user endppoint
      formikActions.resetForm();
      formikActions.setSubmitting(false);
    } catch (error) {
      console.log(error); //TODO: Implement actual error handling.
    }
  };

  return (
    //Add secureTextEntry as a prop to FormInput Component in production.
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ bottom: 50 }}>
        <Text style={{ color: 'white' }}>Login</Text>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={signUp}>
          <FormInput name="name" placeholderText="Name" />
          <FormInput name="email" placeholderText="Email" />
          <FormInput name="password" placeholderText="Password" />
          <FormInput name="confirmPassword" placeholderText="Password Confirmation" />
          <SubmitButton color={colors.buttons} title="Sign-Up" />
        </CustomFormik>
      </View>
    </ScrollView>
  );
}

export default RegisterScreen;
