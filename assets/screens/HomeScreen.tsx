import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
});

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Profile Screen</Text>
    </View>
  );
}

export default HomeScreen;
