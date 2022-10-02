import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 70,
    height: 70
  }
});

const signIcon = require('../images/icons/signIcon.png');

export default function SwitchMap() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.icon} source={signIcon} />
      </TouchableOpacity>
    </View>
  );
}
