import React from 'react';
import { useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';
import colors from '../../theme/colors';
import Icon, { Icons } from '../../theme/Icons';

const styles = StyleSheet.create({
  container: {
    bottom: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    position: 'absolute',
    backgroundColor: 'black',
    borderRadius: 100,
    padding: 30
  }
});

export default function NextButton({ percentage, scrollTo }: any) {
  //TODO: Fix Type
  const size = 128;
  const strokeWidth = 3;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progress = useRef(new Animated.Value(0)).current;
  const progressRef = useRef<any>(null); //TODO: Fix Type

  const animate = (toValue: any) => {
    //TODO: Fix Type
    return Animated.timing(progress, {
      toValue,
      duration: 250,
      useNativeDriver: false
    }).start();
  };

  useEffect(() => {
    animate(percentage);
  }, [percentage]);

  useEffect(() => {
    progress.addListener(
      (value) => {
        const strokeDashoffset = circumference - (circumference * value.value) / 100;

        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset
          });
        }
      }
      //[percentage]
    );

    return () => {
      progress.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-80" origin={center}>
          <Circle stroke="#000000" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
          <Circle
            ref={progressRef}
            stroke={colors.confirm}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
        <Icon type={Icons.AntDesign} name={'check'} color={colors.white} size={40} />
      </TouchableOpacity>
    </View>
  );
}
