import { View, Text, Animated, StyleSheet } from 'react-native';
import React from 'react';
import { bg } from '../../constants/slides';
import { WIDTH } from '../../constants/dimensions';

export default function BackDrop({ scrollX }: any) {
  //TODO: Find Type Of ScrollX
  const backgroundColor = scrollX.interpolate({
    inputRange: bg.map((_, i) => i * WIDTH),
    outputRange: bg.map((bg) => bg)
  });

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor
        }
      ]}></Animated.View>
  );
}
