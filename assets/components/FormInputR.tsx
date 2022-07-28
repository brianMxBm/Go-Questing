import { useFormikContext } from 'formik';
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import colors from '../../theme/colors';
import { formTypeR, initialType } from '../../types';

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
function FormInputR({ placeholderText, name, width, height }: formTypeR) {
  //TODO: Remove Rest Props.
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext<initialType>();

  const value = values[name as keyof initialType];
  const error = errors[name as keyof initialType];
  const isInputTouched = touched[name as keyof initialType];

  return (
    <View>
      <>
        {error && isInputTouched ? (
          <Text style={{ color: 'red', paddingHorizontal: 5 }}>{error}</Text>
        ) : null}
      </>
      <View style={[styles.inputContainer, { width: width }, { height: height }]}>
        <TextInput
          value={value}
          style={styles.input}
          onChangeText={handleChange(name)}
          numberOfLines={1}
          onBlur={handleBlur(name)}
          placeholder={placeholderText}
          placeholderTextColor="#666"
        />
      </View>
    </View>
  );
}

export default FormInputR;
