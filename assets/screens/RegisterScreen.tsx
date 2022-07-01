import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
});

function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Register Screen</Text>
    </View>
  );
}

export default MapScreen;
