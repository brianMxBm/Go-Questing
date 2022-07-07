import { GestureResponderEvent, Animated } from 'react-native';
import Icon from '../theme/icons';

export interface iconType {
  //interface for icons
  type: React.ElementType;
  name: string;
  color: string;
  size?: number;
  style?: React.CSSProperties;
}

export interface accessibilityType {
  //TODO: Replace with proper object type (not sure what it is)
  disabled: boolean;
  selected: boolean;
  checked: boolean;
  busy: boolean;
  expanded: boolean;
}

export interface itemType {
  route: string;
  label: string;
  type: typeof Icon;
  activeIcon: string;
  inActiveIcon: string;
  component: JSX.Element;
}

export interface activeIconType {
  name: string;
  width: number;
  activeIndex: number;
  translateX: Animated.Value | Animated.AnimatedInterpolation;
  height?: number;
}

export interface tabCurveType {
  width: number;
  height: number;
  activeIndex: 0;
  activeIcon: '';
  translateX: Animated.Value | Animated.AnimatedInterpolation;
}

export interface tabBarType {
  tabs: []; //TODO CHANGE TYPE
  activeIndex: number | 0;
  onPressTab: ((event: GestureResponderEvent) => void) | undefined;
  AnimationValue: Animated.Value;
}
