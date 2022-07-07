import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './assets/screens/LoginScreen';
import RegisterScreen from './assets/screens/RegisterScreen';
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <RegisterScreen />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
