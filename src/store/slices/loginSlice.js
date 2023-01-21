import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLogin: false,
  showRegister: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    openLogin(state) {
      state.showLogin = true;
      state.showRegister = false;
    },
    openRegister(state) {
      state.showLogin = false;
      state.showRegister = true;
    },

    closeLoginModal(state) {
      state.showLogin = false;
      state.showRegister = false;
    },
  },
});

export const { openLogin, openRegister, closeLoginModal } = loginSlice.actions;
export default loginSlice.reducer;
