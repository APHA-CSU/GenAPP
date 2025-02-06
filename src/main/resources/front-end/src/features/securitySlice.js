import { createSlice } from "@reduxjs/toolkit";

export const securitySlice = createSlice({
  name: "home",
  initialState: {
    showHomePage: true,
    showProjectsPage: false,
    showRegisterPage: false,
    showLoginPage: false,
    activePage: "home",
  },
  reducers: {
    setShowPage: (state, action) => {
      state.activePage = action.payload;
      state.showHomePage = false;
      state.showProjectsPage = false;
      state.showRegisterPage = false;
      state.showLoginPage = false;
      switch (action.payload) {
        case "home":
          state.showHomePage = true;
          break;
        case "projects":
          state.showProjectsPage = true;
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
