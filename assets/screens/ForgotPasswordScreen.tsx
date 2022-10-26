import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PhoneInput, { isValidNumber } from 'react-native-phone-number-input';
import { sendVerification } from '../../api/verify';
import { updateNotification } from '../../utils/helper';
import { WIDTH } from '../../constants/dimensions';
import { ForgotPassowrdScreenNavigationProp } from '../../navigation/types/NavTypes';
import AnimatedAlert from '../components/AnimatedAlert';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    marginTop: 20,
    height: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttons
  },
  buttonText: {
    color: colors.black,
    fontSize: 14
  },
  error: {
    alignItems: 'center',
    bottom: 20,
    width: WIDTH / 2
  }
});

function ForgotPasswordOTPScreen({ navigation }: ForgotPassowrdScreenNavigationProp) {
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [message, setMessage] = useState({
    //TODO: Implement utilzing Redux.
    text: '',
    type: ''
  });

  const handleOTP = async (formattedValue: string) => {
    try {
      if (!isValidNumber(formattedValue, 'US'))
        return updateNotification(setMessage, 'Invalid Number');
      const res = await sendVerification(formattedValue);
      if (!res) return console.log('error');
      navigation.navigate('Verification', { phoneNumber: formattedValue });
    } catch (error) {
      console.log(error); //TODO: Implement proper exception handling.
    }
  };
  return (
    <View style={styles.container}>
      {message.text ? (
        <AnimatedAlert style={styles.error} type={message.type} text={message.text} />
      ) : null}
      <PhoneInput
        defaultValue={value}
        defaultCode="US"
        layout="second"
        onChangeText={(text) => {
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        countryPickerProps={{ withAlphaFilter: true }}
        withShadow
        autoFocus
      />
      <TouchableOpacity style={styles.button} onPress={() => handleOTP(formattedValue)}>
        <Text style={styles.buttonText}>Send Code</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPasswordOTPScreen;
