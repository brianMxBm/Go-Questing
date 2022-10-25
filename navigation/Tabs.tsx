import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  ImageSourcePropType,
  AccessibilityState
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '../constants/screens';
import { TABS } from '../constants/dimensions';
import { mapIcon, profileIcon, messageIcon, swordIcon, compassIcon } from '../theme/images';
import { BottomStackParamList, ITabItem } from './types/NavTypes';
import * as Animatable from 'react-native-animatable';
import colors from '../theme/colors';

interface tabButtonType {
  item: {
    icon: ImageSourcePropType;
  };
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  accessibilityState?: AccessibilityState;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  icon: {
    width: 40,
    height: 40
  }
});

export const tabArray: ITabItem[] = [
  {
    name: 'Map',
    icon: mapIcon,
    component: Screens.MapScreen
  },
  {
    name: 'Feed',
    icon: compassIcon,
    component: Screens.JobFeedScreen
  },
  {
    name: 'Quest',
    icon: swordIcon,
    component: Screens.QuestScreen
  },
  {
    name: 'Profile',
    icon: profileIcon,
    component: Screens.ProfileScreen
  },
  {
    name: 'Message',
    icon: messageIcon,
    component: Screens.MessageScreen
  }
];

function TabButton(tab: tabButtonType) {
  const focused = tab.accessibilityState && tab.accessibilityState.selected;

  const focusedTabAnimation = {
    0: { transform: [{ rotate: '0deg' }], scale: 0.5 },
    1: { transform: [{ rotate: '360deg' }], scale: 1.22 }
  };

  const unfocusedTabAnimation = {
    0: { transform: [{ rotate: '360deg' }], scale: 1.22 },
    1: { transform: [{ rotate: '0deg' }], scale: 1 }
  };

  return (
    <TouchableOpacity onPress={tab.onPress} activeOpacity={1} style={styles.container}>
      <Animatable.View
        animation={focused ? focusedTabAnimation : unfocusedTabAnimation}
        duration={500}
        style={styles.container}>
        <Image style={styles.icon} source={tab.item.icon}></Image>
      </Animatable.View>
    </TouchableOpacity>
  );
}
const Tab = createBottomTabNavigator<BottomStackParamList>();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: TABS.HEIGHT,
          borderTopWidth: 0,
          backgroundColor: colors.black,
          paddingTop: 15,
          paddingHorizontal: 15,
          borderRadius: 25,
          borderColor: colors.white,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          position: 'absolute',
          overflow: 'hidden'
        }
      }}>
      {tabArray.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
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
