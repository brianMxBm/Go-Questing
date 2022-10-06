import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import JobFeedScreen from '../assets/screens/JobFeedScreen';
import { HomeStackNavigatorParamList } from './types/NavigationTypes';
import JobDetailScreen from '../assets/screens/JobDetailScreen';

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
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
        <HomeStack.Screen name="Tabs" component={TabNavigation} />
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Profile" component={ProfileScreen} />
        <HomeStack.Screen name="Feed" component={JobFeedScreen} />
        <HomeStack.Screen name="Map" component={MapScreen} />
        <HomeStack.Screen name="Details" component={JobDetailScreen} />
      </HomeStack.Navigator>
    );
  } else {
    return (
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <HomeStack.Screen name="Tabs" component={TabNavigation} />
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Profile" component={ProfileScreen} />
        <HomeStack.Screen name="Feed" component={JobFeedScreen} />
        <HomeStack.Screen name="Map" component={MapScreen} />
        <HomeStack.Screen name="Details" component={JobDetailScreen} />
      </HomeStack.Navigator>
    );
  }
};

export default HomeStackNavigator;
