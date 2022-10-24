import React, { useEffect, useRef } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
  ImageSourcePropType
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screens } from '../constants/screens';
import { TABS } from '../constants/dimensions';
import { mapIcon, profileIcon, messageIcon, swordIcon, compassIcon } from '../theme/images';
import { BottomStackParamList } from './types/NavTypes';
import * as Animatable from 'react-native-animatable';
import colors from '../theme/colors';

interface tabButtonType {
  item: {
    icon: ImageSourcePropType;
  };
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  accessibilityState?: any; //TODO: CHANGE THIS CAN'T STAY LIKE THIS
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

export const TabArray = [
  {
    route: 'Map',
    icon: mapIcon,
    component: Screens.MapScreen
  },
  {
    route: 'Feed',
    icon: compassIcon,
    component: Screens.JobFeedScreen
  },
  {
    route: 'Quest',
    icon: swordIcon,
    component: Screens.QuestScreen
  },
  {
    route: 'Profile',
    icon: profileIcon,
    component: Screens.ProfileScreen
  },
  {
    route: 'Message',
    icon: messageIcon,
    component: Screens.MessageScreen
  }
] as const;

function TabButton(tab: tabButtonType) {
  const focused = tab.accessibilityState.selected;
  const viewRef = useRef<any>(null); //TODO: Figure out specific type.

  useEffect(() => {
    if (viewRef.current) {
      if (focused) {
        viewRef.current.animate({
          0: { scale: 0.5, rotate: '0deg' },
          1: { scale: 1.22, rotate: '360deg' }
        });
      } else {
        viewRef.current.animate({
          0: { scale: 1.22, rotate: '360deg' },
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
