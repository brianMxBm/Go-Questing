import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchMap from '../components/SwitchMap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <SwitchMap />
    </View>
  );
}

export default ProfileScreen;
