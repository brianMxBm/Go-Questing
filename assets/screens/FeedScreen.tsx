import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { postJob } from '../../utils/jobActions';
import * as yup from 'yup';
import FormInputR from '../components/FormInputR';
import SubmitButton from '../components/SubmitButton';
import CustomFormik from '../components/CustomFomik';
import colors from '../../theme/colors';
import AnimatedAlert from '../components/AnimatedAlert';
import { WIN_HEIGHT, WIN_WIDTH } from '../../constants/dimensions';
import { navigationType } from '../../types';
import { updateNotification } from '../../utils/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  textDanger: {
    color: 'red'
  }
});
const windowWidth = WIN_WIDTH;
const windowHeight = WIN_HEIGHT / 15;
const descHeight = WIN_HEIGHT / 5;
//post title, compensation, description, location, job category
const initialValues = {
  postTitle: '',
  compensation: '',
  description: '',
  jobCategory: '',
  location: ''
};
const validationSchema = yup.object().shape({
  postTitle: yup.string().trim().required('Title Is Missing'),
  compensation: yup.string().trim().required('Compensation Is Missing'),
  description: yup.string().trim().required('Description Is Missing'),
  jobCategory: yup.string().trim().required('Category Required'),
  location: yup.string().trim().required('Location Is Missing')
});
function FeedScreen({ navigation }: navigationType) {
  const handlePostJob = async (values: any, formikActions: any) => {
    const res = await postJob(values);
    formikActions.setSubmitting(false);
    if (!res.sucesss) return updateNotification(setMessage, res.error);
    formikActions.resetForm();
    navigation.reset({
      index: 0,
      routes: [{ name: 'Tabs' }]
    });
  };

  const [message, setMessage] = useState({
    //Implement utilzing Redux.
    text: '',
    type: ''
  });

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ bottom: 50 }}>
          {message.text ? <AnimatedAlert type={message.type} text={message.text} /> : null}
          <Text style={{ color: 'white' }}>Login</Text>
          <CustomFormik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handlePostJob}>
            <FormInputR
              name="postTitle"
              placeholderText="Post Title"
              width={windowWidth}
              height={windowHeight}
            />
            <FormInputR
              name="compensation"
              placeholderText="Compensation"
              width={windowWidth}
              height={windowHeight}
            />
            <FormInputR
              name="description"
              placeholderText="Description"
              width={windowWidth}
              height={descHeight}
            />
            <FormInputR
              name="jobCategory"
              placeholderText="Job Category"
              width={windowWidth}
              height={windowHeight}
            />
            <FormInputR
              name="location"
              placeholderText="Location"
              width={windowWidth}
              height={windowHeight}
            />
            <SubmitButton color={'deeppink'} title="Post Job" />
          </CustomFormik>
        </View>
      </ScrollView>
    </>
  );
}

export default FeedScreen;
