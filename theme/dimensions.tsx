/* Maintain all constant dimensions here*/
import { Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;

export const WINDOW = {
  WIDTH,
  HEIGHT
};

export const TABS = {
  WIDTH,
  HEIGHT: 64
};
