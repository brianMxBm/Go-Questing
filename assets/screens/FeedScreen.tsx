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

function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Feed Screen</Text>
    </View>
  );
}

export default FeedScreen;
