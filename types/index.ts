import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { GestureResponderEvent } from 'react-native';

export interface accessibilityType {
  //TODO: Replace with proper object type (not sure what it is)
  disabled: boolean;
  selected: boolean;
  checked: boolean;
  busy: boolean;
  expanded: boolean;
}

export interface itemType {
  route: string;
  label: string;
  icon: any;
  component: () => JSX.Element;
}

export interface tabButtonType {
  item: itemType;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  accessibilityState?: any; //TODO: CHANGE THIS CAN'T STAY LIKE THIS
}

export interface FormValues {
  name: string;
  email: string;
  password: string;
  password2: string;
}

export interface ErrorResponse {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
}

export interface inputType {
  labelValue: string;
  placeHolderText: string;
  iconType: React.ElementType;
}

export interface initialType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface initialPhoneType {
  number: string;
}

export interface submitType {
  title: string;
  color: string;
}

export interface formTypeR {
  placeholderText: string;
  name: string;
  width: number;
  height: number;
}

export interface customFormType {
  children?: any;
  initialValues?: any;
  validationSchema?: any;
  onSubmit?: any;
}

export interface navigationType {
  navigate: any;
  reset: any;
  navigation: NavigationProp<any, any>;
}
