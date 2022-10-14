import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFormikContext } from 'formik';
import React, { useEffect } from 'react';
import colors from '../../theme/colors';
import { WIDTH } from '../../constants/dimensions';
import { initialType } from '../../types';

interface submitType {
  title: string;
  color: string;
}

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

const SubmitButton = ({ title, color }: submitType) => {
  //TODO: Initial Type Must Be Dynamic
  const { handleSubmit, isSubmitting } = useFormikContext<initialType>();

  return (
    <TouchableOpacity
      onPress={() => handleSubmit()}
      style={[styles.submit, { backgroundColor: isSubmitting ? 'gray' : color }]}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
