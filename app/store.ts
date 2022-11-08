import { configureStore } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

import authReducer, { setUserFromStorage } from '../features/auth/authSlice';
import locationReducer from '../features/location/locationSlice';
import mapReducer from '../features/map/mapSlice';
import jobsReducer from '../features/jobs/jobsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    location: locationReducer,
    map: mapReducer,
    jobs: jobsReducer
  }
});

// Get user from storage upon app start
const getUserFromStorage = async () => {
  const user = JSON.parse((await SecureStore.getItemAsync('user')) as string);

  if (!user) return;

  store.dispatch(setUserFromStorage(user));
};

getUserFromStorage();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
