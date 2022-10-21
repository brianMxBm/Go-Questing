import axios from 'axios';
import client from '../api/client';

type registerReq = {
  name: string;
  email: string;
  password: string;
};

type loginReq = {
  email: string;
  password: string;
};

const catchError = (error: { response: any; message: string; data: any }) => {
  //TODO: Can't stay as any.
  if (error?.response?.data) {
    return error.response.data;
  }
  return { success: false, error: error.message };
};

//TODO: Create a request function to unify all of these functions.
//TODO: Give Errors a type with Axios. Refactor CatchError to accept that.
export const signUp = async (request: registerReq) => {
  try {
    const { data } = await client.post(
      '/user/create',
      { ...request },
      { timeout: 10000, timeoutErrorMessage: 'Time Out. Please Try Again' }
    ); //TODO: Temp timeout time, stress test later to get accurate number.
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
    } else {
      console.log('Register Failed'); //TODO: implement actual error handling.
    }
    return catchError(error);
  }
};

export const signIn = async (request: loginReq) => {
  try {
    const { data } = await client.post(
      '/user/signin',
      { ...request },
      { timeout: 10000, timeoutErrorMessage: 'Time Out. Please Try Again' }
    ); //TODO: Temp timeout time, stress test later to get accurate number.
    return data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
    } else {
      console.log('Login Failed'); //TODO: implement actual error handling.
    }
    return catchError(error);
  }
};
