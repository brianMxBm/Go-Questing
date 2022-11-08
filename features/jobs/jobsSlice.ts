import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getJobs as getJobsService } from '../../utils/jobActions';

export interface IJob {
  _id: string;
  user: string;
  postTitle: string;
  description: string;
  compensation: string;
  address: string;
  jobCategory: string;
  location: {
    type: 'Point';
    coordinates: number[];
  };
}

export interface IJobsState {
  isLoading: boolean;
  jobs: IJob[];
  // TODO: Talk this over with the boss
  isError: boolean;
}

const initialState: IJobsState = {
  isLoading: false,
  jobs: [],
  isError: false
};

export const getJobs = createAsyncThunk(
  'jobs/getJobs',
  async ({ latitude, longitude }: { latitude: number; longitude: number }) => {
    try {
      return await getJobsService(latitude, longitude);
    } catch (e) {
      // TODO: Implement error handling & use thunkAPI
      console.log(e);
    }
  }
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobs.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getJobs.fulfilled, (state, action: PayloadAction<IJobsState['jobs']>) => {
      state.isLoading = false;
      state.jobs = action.payload;
    });
    builder.addCase(getJobs.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default jobsSlice.reducer;
