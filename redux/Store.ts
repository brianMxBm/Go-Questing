import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './slices/locationSlice';
import mapReducer from './slices/mapSlice';

const Store = configureStore({
  reducer: { location: locationReducer, map: mapReducer }
});

// Infer the `RootState` and `AppDispatch` types from the store itself. (Refer: https://redux-toolkit.js.org/usage/usage-with-typescript)
export type RootState = ReturnType<typeof Store.getState>;
// Infer types for Reducers.  Refer: https://redux-toolkit.js.org/usage/usage-with-typescript)

export type AppDispatch = typeof Store.dispatch;

export { Store };
