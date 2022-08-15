import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import * as yup from 'yup';
import colors from '../../theme/colors';
import { WIDTH } from '../../constants/dimensions';
import Icon, { Icons } from '../../theme/Icons';

const inputWidth = Math.round(WIDTH / 6);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.confirm
  },
  heading: {
    color: colors.black,
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 24
  },
  inputContainer: {
    width: inputWidth,
    height: inputWidth,
    borderWidth: 2,
    borderColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    fontSize: 25,
    color: colors.black,
    backgroundColor: colors.white,
    paddingHorizontal: 22,
    paddingVertical: 20
  },
  OTP: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: inputWidth / 2
  },
  submitIcon: {
    alignSelf: 'center',
    padding: 20,
    backgroundColor: colors.black,
    borderRadius: 50,
    marginTop: 30
  }
});

const inputs = Array(4).fill('');

const submitPin = async () => {
  console.log('test');
};

const validationSchema = yup.object().shape({
  number: yup.number().required('Pin Required')
});

const VerificationScreen = () => {
  const input = useRef<any>(); //TODO: CHANGE TYPE FROM ANY
  const [OTP, setOTP] = useState<{ [key: number]: string }>({ 0: '', 1: '', 2: '', 3: '' });
  const [nextInputIndex, setNextInputIndex] = useState(0);
  let newInputIndex = 0;

  useEffect(() => {
    input.current.focus();
    console.log(OTP);
  }, [nextInputIndex]);

  const handleChangeText = (text: string, index: number) => {
    const newOTP = { ...OTP };
    newOTP[index] = text;
    setOTP(newOTP);

    const lastInputIndex = inputs.length - 1;
    if (!text) newInputIndex = index === 0 ? 0 : index - 1;
    else newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;
    setNextInputIndex(newInputIndex);
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>Input Pin</Text>
      <View style={styles.OTP}>
        {inputs.map((inp, index) => {
          return (
            <View key={index.toString()} style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="0"
                onChangeText={(text) => handleChangeText(text, index)}
                placeholderTextColor={colors.black}
                keyboardAppearance="dark"
                keyboardType="numeric"
                maxLength={1}
                ref={nextInputIndex === index ? input : null}
              />
            </View>
          );
        })}
      </View>
      <TouchableOpacity onPress={submitPin} style={styles.submitIcon}>
        <Icon type={Icons.Ionicons} name="checkmark-outline" color={colors.white} />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default VerificationScreen;
