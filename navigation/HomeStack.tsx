import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from './types/NavTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../assets/screens/HomeScreen';
import MapScreen from '../assets/screens/MapScreen';
import ProfileScreen from '../assets/screens/ProfileScreen';
import FeedScreen from '../assets/screens/PostJobScreen';
import RegisterScreen from '../assets/screens/RegisterScreen';
import LoginScreen from '../assets/screens/LoginScreen';
import ForgotPasswordOTPScreen from '../assets/screens/ForgotPasswordScreen';
import VerificationScreen from '../assets/screens/VerificationScreen';
import TutorialScreen from '../assets/screens/TutorialScreen';
import JobFeedScreen from '../assets/screens/JobFeedScreen';
import JobDetailScreen from '../assets/screens/JobDetailScreen';
import Tabs from './Tabs';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  //TODO: Implement With Redux.
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
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <HomeStack.Screen name="Register" component={RegisterScreen} />
        <HomeStack.Screen name="Login" component={LoginScreen} />
        <HomeStack.Screen name="Forgot" component={ForgotPasswordOTPScreen} />
        <HomeStack.Screen name="Verification" component={VerificationScreen} />
        <HomeStack.Screen name="Tabs" component={Tabs} />
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Profile" component={ProfileScreen} />
        <HomeStack.Screen name="Details" component={JobDetailScreen} />
      </HomeStack.Navigator>
    );
  } else {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <HomeStack.Screen name="Register" component={RegisterScreen} />
        <HomeStack.Screen name="Login" component={LoginScreen} />
        <HomeStack.Screen name="Forgot" component={ForgotPasswordOTPScreen} />
        <HomeStack.Screen name="Verification" component={VerificationScreen} />
        <HomeStack.Screen name="Tabs" component={Tabs} />
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Profile" component={ProfileScreen} />
        <HomeStack.Screen name="Details" component={JobDetailScreen} />
      </HomeStack.Navigator>
    );
  }
};

export default HomeStackNavigator;
