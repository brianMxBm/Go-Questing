import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { postJob } from '../../utils/jobActions';
import { updateNotification } from '../../utils/helper';
import { FormikHandlers, FormikProps } from 'formik';
import * as yup from 'yup';
import colors from '../../theme/colors';
import AnimatedAlert from '../components/AnimatedAlert';
import CustomFormik from '../components/CustomFomik';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  textDanger: {
    color: colors.errors
  }
});

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

function PostJobScreen() {
  const [message, setMessage] = useState({
    //TODO:Implement utilzing Redux.
    text: '',
    type: ''
  });

  const handlePostJob = async (
    values: typeof initialValues,
    formikActions: FormikProps<FormikHandlers>
  ) => {
    const res = await postJob(values);
    formikActions.setSubmitting(false);
    if (!res.success) return updateNotification(setMessage, res.error);
    formikActions.resetForm();
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ bottom: 50 }}>
        {message.text ? <AnimatedAlert type={message.type} text={message.text} /> : null}
        <Text style={{ color: colors.white }}>Post Job</Text>
        <CustomFormik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handlePostJob}>
          <FormInput name="title" placeholderText="Job Title" />
          {/* TODO: Create new form component for numbers.  */}
          <FormInput name="compensation" placeholderText="Job Pay" />{' '}
          <FormInput style={{ height: 50 }} name="description" placeholderText="Job Description" />
          {/* TODO: Create new form component for categories.  */}
          <FormInput name="category" placeholderText="Job Category" />
          {/* TODO: Create new form component for selecting location via a google map, dragable marker.  */}
          <FormInput name="location" placeholderText="Job Location" />
          <SubmitButton color={colors.buttons} title="Post Job" />
        </CustomFormik>
      </View>
    </ScrollView>
  );
}

export default PostJobScreen;
