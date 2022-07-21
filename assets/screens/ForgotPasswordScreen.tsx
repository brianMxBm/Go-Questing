import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
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
interface FormValues {
  email: string;
}
interface ErrorResponse {
  email?: string;
}
const validateForm = (values: FormValues): ErrorResponse => {
  const errors: ErrorResponse = {};

  if (!values.email) errors.email = 'Email address is required';
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = 'Email address is invalid';
  return errors;
};
function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Forgot Screen</Text>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) =>
          axios
            .post('/forgot-password', {
              email: values.email
            })
            .then((response) => console.log(response))
        }
        validate={validateForm}
        validateOnChange={false}>
        {({ handleChange, handleSubmit, values, errors }) => (
          <View>
            <TextInput
              placeholder="Email"
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <Text style={styles.textDanger}>{errors.email}</Text>
            <Button onPress={handleSubmit} title="Reset Password" />
          </View>
        )}
      </Formik>
    </View>
  );
}

export default ForgotPasswordScreen;
