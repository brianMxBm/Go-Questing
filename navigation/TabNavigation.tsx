import React, { useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '../constants/screens';
import { TABS } from '../constants/dimensions';
import { tabButtonType } from '../types/index';
import { mapIcon, profileIcon, compassIcon, swordIcon, messageIcon } from '../constants/icons';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 12,
    color: 'white'
  },
  icon: {
    width: 40,
    height: 40
  }
});

const Tab = createBottomTabNavigator();

export const TabArray = [
  {
    route: 'Home',
    label: 'Home',
    icon: mapIcon,
    component: Screens.MapScreen
  },
  {
    route: 'Feed',
    label: 'Feed',
    icon: compassIcon,
    component: Screens.FeedScreen
  },
  {
    route: 'Quests',
    label: 'Quests',
    icon: swordIcon,
    component: Screens.QuestScreen
  },
  {
    route: 'Profile',
    label: 'Profile',
    icon: profileIcon,
    component: Screens.ProfileScreen
  },
  {
    route: 'Message',
    label: 'Profile',
    icon: messageIcon,
    component: Screens.MessageScreen
  }
];

function TabButton(tab: tabButtonType) {
  const focused = tab.accessibilityState.selected;
  const viewRef = useRef<any>(null); //TODO: Figure out specific type.

  useEffect(() => {
    if (viewRef.current) {
      if (focused) {
        viewRef.current.animate({
          0: { scale: 0.5, rotate: '0deg' },
          1: { scale: 1.35, rotate: '0deg' }
        });
      } else {
        viewRef.current.animate({
          0: { scale: 1.2, rotate: '0deg' },
          1: { scale: 1, rotate: '0deg' }
        });
      }
    }
  }, [focused]);

  return (
    <TouchableOpacity onPress={tab.onPress} activeOpacity={1} style={styles.container}>
      <Animatable.View ref={viewRef} duration={500} style={styles.container}>
        <Image style={styles.icon} source={tab.item.icon}></Image>
      </Animatable.View>
    </TouchableOpacity>
  );
}

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: TABS.HEIGHT,
          backgroundColor: 'black',
          borderTopWidth: 0,
          borderRadius: 25
        }
      }}>
      {TabArray.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton {...props} item={item} />
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
