import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFormikContext } from 'formik';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.confirm
  },
  buttonText: {
    color: 'white',
    fontSize: 14
  }
});

const OTPButton = () => {
  const { handleSubmit, isSubmitting } = useFormikContext<string>();
  const color = colors.confirm; //TODO: Find a fix.
  return (
    <TouchableOpacity
      onPress={() => handleSubmit()}
      style={[styles.button, { backgroundColor: isSubmitting ? 'gray' : color }]}>
      <Text style={styles.buttonText}>Send Code</Text>
    </TouchableOpacity>
  );
};

export default OTPButton;
