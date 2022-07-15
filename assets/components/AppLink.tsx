import React from 'react';
import { StyleSheet, Pressable, Text, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';
import { appLinkType } from '../../types';

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
