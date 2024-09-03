import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};
 const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SigninStart: (state) => {
      state.loading = true;
    },
    Signinsuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    SigninFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const {SigninStart,Signinsuccess,SigninFailed}=UserSlice.actions;
export default UserSlice.reducer;