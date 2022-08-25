import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { signUp } from '../../utils/auth';
import * as yup from 'yup';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';
import CustomFormik from '../components/CustomFomik';
import colors from '../../theme/colors';
import AnimatedAlert from '../components/AnimatedAlert';
import LinkNavigator from '../components/LinkNavigator';
import { navigationType } from '../../types';
import { updateNotification } from '../../utils/helper';

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
      'Password requires an uppercase letter, number and special character ¯\\_(ツ)_/¯ '
    ),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password')], 'Passwords Must Match')
    .required('Please Confirm Password')
});

function RegisterScreen({ navigation }: navigationType) {
  const handleSignUp = async (values: any, formikActions: any) => {
    const res = await signUp(values);
    formikActions.setSubmitting(false);
    if (!res.success) return updateNotification(setMessage, res.error);
    formikActions.resetForm();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Tabs' }]
    });
  };

  const [message, setMessage] = useState({
    //Implement utilzing Redux.
    text: '',
    type: ''
  });

  return (
    //Add secureTextEntry as a prop to FormInput Component in production.
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ bottom: 50 }}>
          {message.text ? <AnimatedAlert type={message.type} text={message.text} /> : null}
          <Text style={{ color: 'white' }}>Login</Text>
          <CustomFormik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSignUp}>
            <FormInput name="name" placeholderText="Name" />
            <FormInput name="email" placeholderText="Email" />
            <FormInput name="password" placeholderText="Password" />
            <FormInput name="confirmPassword" placeholderText="Password Confirmation" />
            <SubmitButton color={colors.buttons} title="Sign-Up" />
          </CustomFormik>
          <LinkNavigator
            leftLinkText="Sign In"
            rightLinkText="Forgot Password"
            onLeftLinkPress={() => navigation.navigate('Login')}
            onRightLinkPress={() => navigation.navigate('Forgot')}
          />
        </View>
      </ScrollView>
    </>
  );
}

export default RegisterScreen;
