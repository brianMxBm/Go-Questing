import React, { useState } from 'react';
import PhoneInput from 'react-native-phone-number-input';
import { Formik, yupToFormErrors } from 'formik';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as yup from 'yup';
import { sendVerification } from '../../api/verify';
import { updateNotification } from '../../utils/helper';
import AnimatedAlert from './AnimatedAlert';
import CustomFormik from './CustomFomik';
import OTPButton from './OTPButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const validationSchema = yup.object().shape({
  //Utilize a basic check to see iof
  phoneNumber: yup.number().required('Phone Number Required')
});

const PhoneInputField = ({ route }: any) => {
  //TODO: Change Type.
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');

  const [message, setMessage] = useState({
    //Implement utilzing Redux.
    text: '',
    type: ''
  });

  const handleOTP = async (values: any, formikActions: any) => {
    const res = await sendVerification(formattedValue);
    formikActions.setSubmitting(false);
    if (!res.success) return updateNotification(setMessage, res.error);
    formikActions.resetForm();
    console.log('navigating...');
  };

  return (
    <>
      <View style={styles.container}>
        {message.text ? <AnimatedAlert type={message.type} text={message.text} /> : null}
        <CustomFormik onSubmit={handleOTP} validationSchema={validationSchema}>
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
          <OTPButton />
        </CustomFormik>
      </View>
    </>
  );
};

export default PhoneInputField;
