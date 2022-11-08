import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LoginScreenNavigationProp } from '../../navigation/types/NavTypes';
import { FormikHandlers, FormikProps } from 'formik';
// import { updateNotification } from '../../utils/helper';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';
import * as yup from 'yup';
import CustomFormik from '../components/CustomFomik';
import colors from '../../theme/colors';
import AnimatedAlert from '../components/AnimatedAlert';
import LinkNavigator from '../components/LinkNavigator';
import { useAppDispatch } from '../../app/hooks';
import { login } from '../../features/auth/authSlice';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  textDanger: {
    color: colors.errors
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

function LoginScreen({ navigation }: LoginScreenNavigationProp) {
  const dispatch = useAppDispatch();

  const handleSignIn = async (
    values: typeof initialValues,
    formikActions: FormikProps<FormikHandlers>
  ) => {
    dispatch(login(values));
    formikActions.setSubmitting(false);
    // if (!res.success) return updateNotification(setMessage, res.error);
    formikActions.resetForm();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Tabs' }]
    });
  };

  const [message] = useState({
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
          <FormInput secure={true} name="password" placeholderText="Password" />
          <SubmitButton color={colors.buttons} title="Login" />
        </CustomFormik>
        <LinkNavigator
          leftLinkText="Sign Up "
          rightLinkText="Forgot Password"
          onLeftLinkPress={() => navigation.navigate('Register')}
          onRightLinkPress={() => navigation.navigate('Forgot')}
        />
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
