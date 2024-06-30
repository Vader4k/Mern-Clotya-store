import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./userThunks";

const userSlice = createSlice({
  name: 'userData',
  initialState: {
    data: null,
    loading: false,
    error: null,
    refreshInProgress: true,
    userDataValid: true,
  },
  reducers: {
    logoutUser: (state) =>{
      state.data = null;
      state.loading = false;
      state.error = null;
      state.userDataValid = false;
    },
    setRefreshInProgress: (state, action) => {
      state.refreshInProgress = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.refreshInProgress = false;
        state.data = action.payload; // Only serializable data here
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Use action.error.message
      });
  },
});

export const { logoutUser, setRefreshInProgress } = userSlice.actions;
export const selectUserData = (state) => state.userData.data;
export const selectLoading = (state) => state.userData.loading;
export const selectError = (state) => state.userData.error;
export const selectRefresh = (state) => state.userData.refreshInProgress;

export default userSlice.reducer;
