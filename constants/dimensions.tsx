/* Maintain all constant dimensions here */
import { Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;

export const WIN_WIDTH = Dimensions.get('window').width;
export const WIN_HEIGHT = Dimensions.get('window').height;

export const SCREEN = {
  WIDTH,
  HEIGHT
};

export const WINDOW = {
  WIN_WIDTH,
  WIN_HEIGHT
};

export const TABS = {
  WIDTH,
  HEIGHT: 85
};
