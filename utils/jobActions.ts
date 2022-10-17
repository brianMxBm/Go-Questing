import client from '../api/client';

const catchError = (error: { response: any; message: any; data: any }) => {
  if (error?.response?.data) {
    return error.response.data;
  }
  return { success: false, error: error.message };
};

export const postJob = async (values: any) => {
  try {
    const { data } = await client.post('/jobs/postJob', values);
    return data;
  } catch (error: any) {
    return catchError(error);
  }
};
