import React, { useEffect, useState } from 'react';
import HomeScreen from '../assets/screens/HomeScreen';
import MapScreen from '../assets/screens/MapScreen';
import ProfileScreen from '../assets/screens/ProfileScreen';
import FeedScreen from '../assets/screens/FeedScreen';
import TabNavigation from './TabNavigation';
import RegisterScreen from '../assets/screens/RegisterScreen';
import LoginScreen from '../assets/screens/LoginScreen';
import ForgotPasswordOTPScreen from '../assets/screens/ForgotPasswordOTPScreen';
import VerificationScreen from '../assets/screens/VerificationScreen';
import OnBoardingScreen from '../assets/screens/onBoardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function RootStackNavigator() {
  const [viewed, setViewed] = useState(false);

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
  };

  const getAsyncStorageItems = async () => {
    try {
      const tutorialViewed = await AsyncStorage.getItem('@TutorialViewed');
      if (tutorialViewed) {
        setViewed(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    clearAsyncStorage();
    getAsyncStorageItems();
  }, []);

  if (!viewed) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Forgot" component={ForgotPasswordOTPScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="Tabs" component={TabNavigation} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Feed" component={FeedScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Forgot" component={ForgotPasswordOTPScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="Tabs" component={TabNavigation} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Feed" component={FeedScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
