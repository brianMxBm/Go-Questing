import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { map_center_change } from '../slices/mapSlice';

export const setMapCenterLocation =
  (latitude: number, longitude: number) => (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    //TODO: Return Type is not Null. It's of type location. Add location to global interfaces.

    try {
      if (latitude || longitude) {
        dispatch(map_center_change({ latitude, longitude }));
      }
    } catch (error) {
      console.log(error);
    }
  };
