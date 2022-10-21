import { Animated } from 'react-native';
import React from 'react';
import { HEIGHT, WIDTH } from '../../constants/dimensions';
import colors from '../../theme/colors';

export default function Square({ scrollX }: any) {
  const transform = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, WIDTH), new Animated.Value(WIDTH)),
    1
  );

  const rotate = transform.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg']
  });

  const translateX = transform.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -HEIGHT, 0]
  });

  return (
    <Animated.View
      style={{
        width: HEIGHT,
        height: HEIGHT,
        backgroundColor: colors.black,
        borderRadius: 100,
        position: 'absolute',
        top: -HEIGHT * 0.6,
        left: -HEIGHT * 0.3,
        transform: [
          {
            rotate
          },
          {
            translateX
          }
        ]
      }}></Animated.View>
  );
}
