import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { updateNotification } from '../../utils/helper';
import { navigationType } from '../../types';
import { forgotPassword } from '../../utils/auth';
import * as yup from 'yup';
import AnimatedAlert from '../components/AnimatedAlert';
import CustomFormik from '../components/CustomFomik';
import SubmitButton from '../components/SubmitButton';
import FormInput from '../components/FormInput';
import colors from '../../theme/colors';
import axios from 'axios';

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
  email: ''
};

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email!').required('Email Is Missing')
});

function ForgotPasswordScreen({ navigation }: navigationType) {
  const handleForgot = async (values: any, formikActions: any) => {
    const res = await forgotPassword(values);
    formikActions.setSubmitting(false);
    if (!res.sucesss) return updateNotification(setMessage, res.error);
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
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ bottom: 50 }}>
          {message.text ? <AnimatedAlert type={message.type} text={message.text} /> : null}
          <Text style={{ color: 'white' }}>Login</Text>
          <CustomFormik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleForgot}>
            <FormInput name="email" placeholderText="Email" />
            <SubmitButton color={colors.buttons} title="Sign-Up" />
          </CustomFormik>
        </View>
      </ScrollView>
    </>
  );
}

export default ForgotPasswordScreen;
