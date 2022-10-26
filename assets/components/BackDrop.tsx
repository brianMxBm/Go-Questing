import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { bg } from '../../constants/slides';
import { WIDTH } from '../../constants/dimensions';

export default function BackDrop({ scrollX }: { scrollX: Animated.Value }) {
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
