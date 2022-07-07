import React from 'react';
import HomeScreen from '../assets/screens/HomeScreen';
import MapScreen from '../assets/screens/MapScreen';
import ProfileScreen from '../assets/screens/ProfileScreen';
import FeedScreen from '../assets/screens/FeedScreen';
import TabNavigation from './TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function RootStackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Tabs" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
