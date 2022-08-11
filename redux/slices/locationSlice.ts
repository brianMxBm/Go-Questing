/* Resorted to using slices for the meantime, issues may arise with exclusivity. Refer: https://redux-toolkit.js.org/usage/usage-guide */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface locationState {
  location: {
    latitude: number;
    longitude: number;
  };
}

const initialState: locationState = {
  location: {
    longitude: 0,
    latitude: 0
  }
};

const locationSlice = createSlice({
  name: 'location',
  initialState: initialState,
  reducers: {
    user_location_granted: (state, action: PayloadAction<locationState['location']>) => {
      // If user location is granted
      return {
        ...state,
        location: action.payload
      };
    },
    user_location_denied(state) {
      //TODO: It should not be returning any location whatsoever but I guess we can default to providing a random lat and long.
      // If user location is denied
      return {
        ...state,
        location: {
          latitude: 0,
          longitude: 0
        }
      };
    },
    user_location_error(state) {
      // if user location isn't found for whatever reason.
      return {
        ...state,
        location: {
          latitude: 0,
          longitude: 0
        }
      };
    },
    default(state) {
      //TODO: Correct?
      return state;
    }
  }
});

export const { user_location_granted, user_location_denied, user_location_error } =
  locationSlice.actions;

export default locationSlice.reducer;
