import React from 'react';
import { Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import colors from '../../theme/colors';
import Icon, { Icons } from '../../theme/Icons';

interface colorButtonType {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  name: string;
  color: string;
  type: React.ElementType;
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20
  }
});

export default function CameraButton({ type, title, onPress, name, color }: colorButtonType) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon type={type} name={name} size={28} color={color} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
