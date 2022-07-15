import React from 'react';
import { View, StyleSheet } from 'react-native';
import { appLinkNavigator } from '../../types';
import AppLink from './AppLink';

const style = StyleSheet.create({
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  }
});

const LinkNavigator = ({
  leftLinkText,
  rightLinkText,
  onLeftLinkPress,
  onRightLinkPress
}: appLinkNavigator) => {
  return (
    <View style={style.linkContainer}>
      <AppLink onPress={onLeftLinkPress} title={leftLinkText} />
      <AppLink onPress={onRightLinkPress} title={rightLinkText} />
    </View>
  );
};

export default LinkNavigator;
