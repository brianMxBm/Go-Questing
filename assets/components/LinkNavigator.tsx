import React from 'react';
import { View, GestureResponderEvent, StyleSheet } from 'react-native';
import AppLink from './AppLink';

export interface appLinkNavigator {
  leftLinkText: string;
  rightLinkText: string;
  onLeftLinkPress: ((event: GestureResponderEvent) => void) | undefined;
  onRightLinkPress: ((event: GestureResponderEvent) => void) | undefined;
}

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
