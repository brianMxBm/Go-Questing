import React from 'react';
import { View, Animated } from 'react-native';
import { WIDTH } from '../../constants/dimensions';
import { DATA } from '../../constants/slides';
import colors from '../../theme/colors';

function Indicator({ scrollX }: any) {
  //TODO: Find Type Of ScrollX
  return (
    <View style={{ position: 'absolute', bottom: 100, flexDirection: 'row' }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * WIDTH, i * WIDTH, (i + 1) * WIDTH];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp'
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              borderRadius: 15,
              backgroundColor: colors.black,
              margin: 10,
              transform: [
                {
                  scale
                }
              ]
            }}></Animated.View>
        );
      })}
    </View>
  );
}

export default Indicator;
