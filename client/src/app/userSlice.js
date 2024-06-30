import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./userThunks";

const userSlice = createSlice({
  name: 'userData',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Only serializable data here
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Use action.error.message
      });
  },
});

export const selectUserData = (state) => state.userData.data;
export const selectLoading = (state) => state.userData.loading;
export const selectError = (state) => state.userData.error;

export default userSlice.reducer;
