import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import * as Location from 'expo-location';
import {
  user_location_denied,
  user_location_granted,
  user_location_error
} from '../slices/locationSlice';

export const getUserLocation = () => async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
  try {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (granted) {
      const lastKnownPosition = await Location.getLastKnownPositionAsync();

      if (!lastKnownPosition) {
        dispatch(user_location_error);
        return;
      }
      console.log('hey');
      const {
        coords: { longitude, latitude }
      } = lastKnownPosition;

      dispatch(user_location_granted({ latitude, longitude }));
    } else {
      dispatch(user_location_denied);
    }
  } catch (error) {
    console.log(error); //TODO: Implement Actual Exception Handling.
  }
};
