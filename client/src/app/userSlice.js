import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./userThunks";

const initialState = {
  data: null,
  loading: false,
  error: null,
  userDataValid: true
}

const userSlice = createSlice({
    name: 'userData',
    reducers: {
      logoutuser: (state) => {
        state.data = null
        state.loading = false
        state.error = null
        state.userDataValid = false
      },

    },
    initialState,
    extraReducers: (builder) => {
      builder
       .addCase(fetchUserData.pending, (state) => {
          state.loading = true;
        })
       .addCase(fetchUserData.fulfilled, (state, action) => {
          if(action.payload.error) {
            state.userDataValid = false;
            state.error = action.payload
          } else {
            state.userDataValid = true;
            state.data = action.payload;
            state.loading = false;
            state.error = null;
          }
        })
       .addCase(fetchUserData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
          state.userDataValid = false;
        })
    }
})

export const { logoutuser, setRefreshInProges } = userSlice.actions;
export const selectUserData = (state) => state.userData.data;
export const selectLoading = (state) => state.userData.loading;
export const selectError = (state) => state.userData.error;
export const selectSession = (state) => state.userData.userDataValid;


export default userSlice.reducer;