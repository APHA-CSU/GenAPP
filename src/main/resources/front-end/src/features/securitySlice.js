import { createSlice } from "@reduxjs/toolkit";

export const securitySlice = createSlice({
  name: "home",
  initialState: {
    showHomePage: true,
    showRegisterPage: false,
    showLoginPage: false,
  },
  reducers: {
    setShowPage: (state, action) => {
      state.showHomePage = false;
      state.showRegisterPage = false;
      state.showLoginPage = false;
      switch (action.payload) {
        case "home":
          state.showHomePage = true;
          break;
        case "register":
          state.showRegisterPage = true;
          break;
        case "login":
          state.showLoginPage = true;
          break;
        default:
          break;
      }
    },
  },
});

export const { setShowPage } = securitySlice.actions;

export default securitySlice.reducer;
