import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';
import * as yup from 'yup';
import CustomFormik from '../components/CustomFomik';
import colors from '../../theme/colors';
import { signIn } from '../../utils/auth';
import { navigationType } from '../../types';
import AnimatedAlert from '../components/AnimatedAlert';
import { updateNotification } from '../../utils/helper';
import LinkNavigator from '../components/LinkNavigator';

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

function LoginScreen({ navigation }: navigationType) {
  const handleSignIn = async (values: any, formikActions: any) => {
    const res = await signIn(values);
    formikActions.setSubmitting(false);
    if (!res.success) return updateNotification(setMessage, res.error);
    formikActions.resetForm();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Tabs' }]
    });
  };

  const [message, setMessage] = useState({
    //TODO:Implement utilzing Redux.
    text: '',
    type: ''
  });

  return (
    //Add secureTextEntry as a prop to FormInput Component in production.
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ bottom: 50 }}>
        {message.text ? <AnimatedAlert type={message.type} text={message.text} /> : null}

        <Text style={{ color: 'white' }}>Login</Text>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignIn}>
          <FormInput name="email" placeholderText="Email" />
          <FormInput name="password" placeholderText="Password" />
          <SubmitButton color={colors.buttons} title="Login" />
        </CustomFormik>
        <LinkNavigator
          leftLinkText="Sign Up "
          rightLinkText="Forgot Password"
          onLeftLinkPress={() => navigation.navigate('Register')}
          onRightLinkPress={() => console.log('hey')}
        />
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
