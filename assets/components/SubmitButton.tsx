import { Pressable, StyleSheet, Text } from 'react-native';
import { useFormikContext } from 'formik';
import React from 'react';
import colors from '../../theme/colors';
import { WIDTH } from '../../constants/dimensions';
import { submitType } from '../../types';

const SubmitButton = ({ title }: submitType) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <Pressable
      onPress={() => (isSubmitting ? null : handleSubmit)}
      style={[styles.submit, { backgroundColor: isSubmitting ? 'gray' : colors.confirm }]}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
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
