import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  showLogin: false,
  showRegister: false,
  showComponyLogin: false,
  currentCompany: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
    addCurrentCompany(state, action) {
      state.currentCompany = action.payload.currentCompany;
    },
    changeCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    onClickSignUp(state) {
      state.currentUser = null;
    },

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

export const {
  openLogin,
  openRegister,
  closeLoginModal,
  openComponyLogin,

  addCurrentCompany,

  changeCurrentUser,
  onClickSignUp,
} = loginSlice.actions;
export default loginSlice.reducer;
