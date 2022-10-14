import { Text, StyleSheet, Animated, ViewStyle } from 'react-native';
import React, { useEffect, useRef } from 'react';
import colors from '../../theme/colors';

export interface notificationType {
  type: string;
  text: string;
  style?: ViewStyle;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 5
  },
  text: {
    color: colors.white,
    fontSize: 15
  }
});

export default function AnimatedAlert({ style, type, text }: notificationType) {
  const height = useRef(new Animated.Value(0)).current;
  const backgroundColor = type === 'error' ? colors.errors : colors.confirm;
  useEffect(() => {
    Animated.timing(height, {
      toValue: 40,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }, []);
  return (
    <Animated.View style={[style, styles.container, { height, backgroundColor }]}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
}
