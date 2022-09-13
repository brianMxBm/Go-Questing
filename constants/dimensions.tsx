/* Maintain all constant dimensions here */
import { Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;

export const WIN_WIDTH = Dimensions.get('window').width;
export const WIN_HEIGHT = Dimensions.get('window').height;

export const SPACING = 10; //TODO: Fix Spacing For JobFeedScreen Card Flatlist
export const CARD_WIDTH = WIDTH * 0.64;
export const CARD_HEIGHT = CARD_WIDTH * 1.4;
export const FULL_SIZE = CARD_WIDTH + SPACING * 2;

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

export const CARD = {
  FULL_SIZE,
  WIDTH: WIDTH * 0.64,
  HEIGHT: WIDTH
};
