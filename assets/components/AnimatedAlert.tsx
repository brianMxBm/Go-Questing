import { View, Text, StyleSheet, Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import colors from '../../theme/colors';
import { notificationType } from '../../types';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center'
  },
  text: {
    color: colors.white,
    fontSize: 15
  }
});

export default function AnimatedAlert({ type, text }: notificationType) {
  const height = useRef(new Animated.Value(0)).current;
  const backgroundColor = type === 'error' ? colors.errors : colors.confirm;
  useEffect(() => {
    Animated.timing(height, {
      toValue: 40,
      duration: 600,
      useNativeDriver: false
    }).start();
  }, []);
  return (
    <Animated.View style={[styles.container, { height, backgroundColor }]}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  );
}
