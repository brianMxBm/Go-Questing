import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFormikContext } from 'formik';
import React, { useEffect } from 'react';
import colors from '../../theme/colors';
import { WIDTH } from '../../constants/dimensions';
import { initialType, submitType } from '../../types';

const SubmitButton = ({ title, color }: submitType) => {
  const { handleSubmit, isSubmitting } = useFormikContext<initialType>();

  return (
    <TouchableOpacity
      onPress={() => handleSubmit()}
      style={[styles.submit, { backgroundColor: isSubmitting ? 'gray' : color }]}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  submit: {
    height: 50,
    width: WIDTH - 40,
    backgroundColor: colors.white,
    borderRadius: 8,
    justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center'
  }
});

export default SubmitButton;
