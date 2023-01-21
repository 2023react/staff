import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLogin: false,
  showRegister: false,
  showComponyLogin: false,
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

    openComponyLogin(state) {
      state.showComponyLogin = true;
    },

    closeLoginModal(state) {
      state.showLogin = false;
      state.showRegister = false;
      state.showComponyLogin = false;
    },
  },
});

export const { openLogin, openRegister, closeLoginModal, openComponyLogin } =
  loginSlice.actions;
export default loginSlice.reducer;
