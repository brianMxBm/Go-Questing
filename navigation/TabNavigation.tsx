import React, { useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import Icon, { Icons } from '../theme/icons';
import { Screens } from '../constants/screens';
import { TABS } from '../constants/dimensions';
import colors from '../theme/colors';
import { accessibilityType, itemType } from '../types/props';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 12,
    color: 'white'
  }
});

const Tab = createBottomTabNavigator();
export const TabArray = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'home',
    inActiveIcon: 'home-outline',
    component: Screens.HomeScreen
  },
  {
    route: 'Feed',
    label: 'Feed',
    type: Icons.Ionicons,
    activeIcon: 'camera',
    inActiveIcon: 'camera-outline',
    component: Screens.FeedScreen
  },
  {
    route: 'Map',
    label: 'Quests',
    type: Icons.Ionicons,
    activeIcon: 'map',
    inActiveIcon: 'map-outline',
    component: Screens.MapScreen
  },
  {
    route: 'Profile',
    label: 'Profile',
    type: Icons.Ionicons,
    activeIcon: 'person',
    inActiveIcon: 'person-outline',
    component: Screens.ProfileScreen
  }
];

function TabButton(
  item: itemType,
  onPress: ((event: GestureResponderEvent) => void) | undefined,
  accessibilityState: accessibilityType
) {
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null); //TODO: Figure out specific type.

  useEffect(() => {
    if (viewRef.current) {
      if (focused) {
        viewRef.current.animate({
          0: { scale: 0.5, rotate: '0deg' },
          1: { scale: 1, rotate: '0deg' }
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
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={styles.container}>
      <Animatable.View ref={viewRef} duration={500} style={styles.container}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? colors.tabs : colors.tabs}
        />
      </Animatable.View>
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
}

export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: TABS.HEIGHT, backgroundColor: 'black', borderTopWidth: 0 }
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
