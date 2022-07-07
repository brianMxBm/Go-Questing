import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

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
  password: string;
}

interface ErrorResponse {
  email?: string;
  password?: string;
}

// Validate form fields on submission
const validateForm = (values: FormValues): ErrorResponse => {
  const errors: ErrorResponse = {};

  if (!values.email) errors.email = 'Email address is required';
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
    errors.email = 'Email address is invalid';

  if (values.password.length < 6) errors.password = 'Password must be at least 6 characters';
  return errors;
};

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Login</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
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
            <TextInput
              placeholder="Password"
              onChangeText={handleChange('password')}
              value={values.password}
            />
            <Text style={styles.textDanger}>{errors.password}</Text>
            <Button onPress={handleSubmit} title="Login" />
          </View>
        )}
      </Formik>
    </View>
  );
}

export default LoginScreen;
