import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { loginReq, registerReq, signIn, signUp } from '../../utils/auth';

export interface IUser {
  user: {
    _id: string;
    email: string;
    // TODO: Abstract first and last name properties
    name: string;
    // TODO: Temporarily adding this property to be compatible with the current API
    success: boolean;
    token: string;
  };
}

export interface IAuthState extends IUser {
  isLoading: boolean;
  accConfirmed: boolean;
  isLoggedIn: boolean;
  // TODO: Talk this over with the boss
  isError: boolean;
}

const initialState: IAuthState = {
  user: {
    _id: '',
    email: '',
    name: '',
    success: false,
    token: ''
  },
  isLoading: false,
  accConfirmed: false,
  isLoggedIn: false,
  isError: false
};

// Register user
export const register = createAsyncThunk('auth/register', async (user: registerReq) => {
  try {
    return await signUp(user);
  } catch (e) {
    // TODO: Implement error handling & use thunkAPI
    console.log(e);
  }
});

// Login user
export const login = createAsyncThunk('auth/login', async (user: loginReq) => {
  try {
    return await signIn(user);
  } catch (e) {
    // TODO: Implement error handling & use thunkAPI
    console.log(e);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserFromStorage: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      // TODO: Move this to separate action for verifying account
      state.accConfirmed = true;
      state.isLoggedIn = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isLoggedIn = true;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      // TODO: Move this to separate action for verifying account
      state.accConfirmed = true;
      state.isLoggedIn = true;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export const { setUserFromStorage } = authSlice.actions;

export default authSlice.reducer;
