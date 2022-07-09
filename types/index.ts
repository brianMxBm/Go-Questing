import React from 'react';
import { GestureResponderEvent, Animated } from 'react-native';
import Icon from '../theme/icons';

export interface iconType {
  //interface for icons
  type: React.ElementType;
  name: string;
  color: string;
  size?: number;
  style?: React.CSSProperties;
}

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
  type: any; //TODO: CHANGE THIS CAN'T STAY LIKE THIS
  activeIcon: string;
  inActiveIcon: string;
  component: () => JSX.Element;
}

export interface tabButtonType {
  item: itemType;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  accessibilityState?: any; //TODO: CHANGE THIS CAN'T STAY LIKE THIS
}
