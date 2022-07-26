/* Resorted to using slices for the meantime, issues may arise with exclusivity. Refer: https://redux-toolkit.js.org/usage/usage-guide */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface mapState {
  location: {
    latitude: number;
    longitude: number;
  };
}
const initialState: mapState = {
  location: {
    longitude: 0,
    latitude: 0
  }
};

const mapSlice = createSlice({
  name: 'map',
  initialState: initialState,
  reducers: {
    map_center_change: (state, action: PayloadAction<mapState['location']>) => {
      return {
        ...state,
        mapCenterLocation: action.payload
      };
    },
    default(state) {
      //TODO: Change.
      return state;
    }
  }
});

export const { map_center_change } = mapSlice.actions;

export default mapSlice.reducer;
