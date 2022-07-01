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

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>Profile Screen</Text>
    </View>
  );
}

export default ProfileScreen;
