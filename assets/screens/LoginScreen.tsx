import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';
import * as yup from 'yup';
import CustomFormik from '../components/CustomFomik';
import colors from '../../theme/colors';
import { signIn } from '../../utils/auth';

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
  email: '',
  password: ''
};

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid Email!').required('Email Is Missing'),
  password: yup.string().trim().required('Password Is Required')
});

function LoginScreen() {
  //TODO: Add Navigation Prop
  const handleSignIn = async (values: any, formikActions: any) => {
    const res = await signIn(values);
    formikActions.setSubmitting(false);

    if (!res.success) return console.log(res.error);
    formikActions.resetForm();
  };

  return (
    //Add secureTextEntry as a prop to FormInput Component in production.
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ bottom: 50 }}>
        <Text style={{ color: 'white' }}>Login</Text>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignIn}>
          <FormInput name="email" placeholderText="Email" />
          <FormInput name="password" placeholderText="Password" />
          <SubmitButton color={colors.buttons} title="Sign-Up" />
        </CustomFormik>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
