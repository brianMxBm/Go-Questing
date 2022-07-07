import React from 'react';
import { View, Animated, StyleSheet, Dimensions, TouchableOpacity, Easing } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Svg, Path } from 'react-native-svg';

import { activeIconType, tabCurveType, tabBarType } from '../../types/props';

const { width } = Dimensions.get('window');
const TabHeight = 65;

const styles = StyleSheet.create({
  tabBar: {
    height: TabHeight,
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  curve: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0
  },
  activeIcon: {
    position: 'absolute',
    top: 0,
    width: 40,
    height: 40,
    borderRadius: 40,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  }
});

function ActiveIcon(icon: activeIconType) {
  const yInputRange = [
    (icon.activeIndex - 1) * width,
    icon.activeIndex * width,
    (icon.activeIndex + 1) * width
  ];

  const yOutputRange = [width / 4, -width / 4, width / 4];
  const opacityOutputRange = [0, 1, 0];

  const translateY = icon.translateX.interpolate({
    inputRange: yInputRange,
    outputRange: yOutputRange
  });

  const opacity = icon.translateX.interpolate({
    inputRange: yInputRange,
    outputRange: opacityOutputRange
  });

  return (
    <Animated.View
      style={[
        styles.activeIcon,
        {
          width: width * 0.6,
          height: width * 0.6,
          transform: [{ translateY }],
          opacity
        }
      ]}>
      <FeatherIcon name={icon.name} color="#2A4C53" size={25} />
    </Animated.View>
  );
} 

function TabBarCurve(curve: tabCurveType) {
  return (
    <Animated.View style={[styles.curve, { transform: [{ curve.translateX }] }]}>
      <Svg width={width} height={curve.height}>
        <Path
          fill="#2A4C53"
          d={`M 0 0 C 0,0 10,0 10,10 C 10,10 ${(width - 10) / 2},${(curve.height - 10) * 1.75} ${
            width - 10
          },10 C ${width - 10},10 ${width - 10},0 ${width},0`}
        />
      </Svg>

      <ActiveIcon
        width={width}
        height={curve.height}
        activeIndex={curve.activeIndex}
        translateX={curve.translateX}
        name={curve.activeIcon}
      />
    </Animated.View>
  );
}
//{ tabs = [], activeIndex = 0, onPressTab, AnimationValue }

function TabBar(tab:tabBarType) {
  const TabWidth = width / (tab.tabs.length || 1);
  const activeTab = tab.tabs[tab.activeIndex];

  return (
    <View style={styles.tabBar}>
      {tab.tabs.map(({ icon }, i) => {
        const opacityInputRange = [(i - 1) * TabWidth, i * TabWidth, (i + 1) * TabWidth];

        const opacityOutputRange = [1, 0, 1];

        const opacity = tab.AnimationValue.current.interpolate({
          inputRange: opacityInputRange,
          outputRange: opacityOutputRange
        });

        return (
          <TouchableOpacity
            style={{ width: TabWidth, height: TabHeight }}
            key={i}
            onPress={() => {
              onPressTab(i);
              Animated.timing(tab.AnimationValue.current, {
                duration: 500 * Math.max(1, Math.abs(tab.activeIndex - i) / 2),
                toValue: TabWidth * i,
                easing: Easing.out(Easing.exp),
                useNativeDriver: true
              }).start();
              return true;
            }}>
            <Animated.View style={[styles.tabBar, { width: TabWidth, height: TabHeight, opacity }]}>
              <FeatherIcon name={icon} color="#2A4C53" size={24} />
            </Animated.View>
          </TouchableOpacity>
        );
      })}

      <TabBarCurve
        translateX={tab.AnimationValue.current}
        width={TabWidth}
        height={TabHeight}
        activeIndex={tab.activeIndex}
        activeIcon={activeTab.icon}
      />
    </View>
  );
}

export default TabBar;
