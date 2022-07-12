import { useFormikContext } from 'formik';
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { WIN_HEIGHT, WIN_WIDTH } from '../../constants/dimensions';
import colors from '../../theme/colors';
import { formType, initialType } from '../../types';

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: WIN_HEIGHT / 15,
    borderColor: '#ccc',
    borderRadius: 3,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.black
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: WIN_WIDTH / 1.5,
    height: WIN_HEIGHT / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1
  }
});
function FormInput({ placeholderText, name }: formType) {
  //...rest: any as prop.
  //TODO: Remove Rest Props.
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext<initialType>();

  const value = values[name];
  const error = errors[name];
  const isInputTouched = touched[name];

  return (
    <View style={styles.inputContainer}>
      <>
        {error && isInputTouched ? (
          <Text style={{ color: 'red', paddingVertical: 3 }}>{error}</Text>
        ) : null}
        <TextInput
          value={value}
          style={styles.input}
          onChangeText={handleChange(name)}
          numberOfLines={1}
          onBlur={handleBlur(name)}
          placeholder={placeholderText}
          placeholderTextColor="#666"
          //{...rest}
        />
      </>
    </View>
  );
}

export default FormInput;
