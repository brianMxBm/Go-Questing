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
export const getJobs = async (latitude: number, longitude: number) => {
  try {
    const { data } = await client.get('/jobs/getJobs', {
      params: { latitude, longitude }
    });
    return data.jobs;
  } catch (error: any) {
    return catchError(error);
  }
};
