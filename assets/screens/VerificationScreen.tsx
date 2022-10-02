import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { checkVerification } from '../../api/verify';
import { navigationType } from '../../types';
import AnimatedAlert from '../components/AnimatedAlert';
import { WIDTH } from '../../constants/dimensions';
import { updateNotification } from '../../utils/helper';

interface OtpProps {
  navigation: navigationType;
  route: any;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  prompt: {
    fontSize: 24,
    paddingHorizontal: 30,
    paddingBottom: 20
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
    fontSize: 20
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6'
  },
  error: {
    alignItems: 'center',
    bottom: 20,
    width: WIDTH / 2
  }
});

function VerificationScreen({ navigation, route }: OtpProps) {
  const { phoneNumber } = route?.params || {};
  const [message, setMessage] = useState({
    //TODO: Implement utilzing Redux.
    text: '',
    type: ''
  });

  const onCodeFilled = async (code: string) => {
    try {
      //TODO: Additioanl Verification Required Here To Avoid Spam Fucking checkVerification Remote Function.
      const success = await checkVerification(phoneNumber, code);
      if (!success) return updateNotification(setMessage, 'Incorrect Code');
      else
        navigation.reset({
          //TODO: This is bad practice. We need to find a way to turn off gestures in this screen, aswell as implementing network aborts with redux-thunk.
          index: 0,
          routes: [{ name: 'Tabs' }]
        });
    } catch (error) {
      console.log(error); //TODO: Implement proper exception handling.
    }
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      {message.text ? (
        <AnimatedAlert style={styles.error} type={message.type} text={message.text} />
      ) : null}
      <Text style={styles.prompt}>Enter the code we sent you</Text>
      <OTPInputView
        style={{ width: '80%', height: 200 }}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={onCodeFilled}
      />
    </SafeAreaView>
  );
}

export default VerificationScreen;
