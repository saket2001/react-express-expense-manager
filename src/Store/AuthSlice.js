import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth slice",
  initialState: {
    isLoggedIn: false,
    userData: {},
  },
  reducers: {
    toggleLogin(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const authActions = authSlice.actions;
