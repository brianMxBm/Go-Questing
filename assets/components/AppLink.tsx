import React from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';

export interface appLinkType {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const styles = StyleSheet.create({
  link: {
    color: colors.links,
    fontSize: 16
  }
});

const AppLink = ({ title, onPress }: appLinkType) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppLink;
