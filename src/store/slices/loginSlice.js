import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  showLogin: false,
  showRegister: false,
  showComponyLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,

  reducers: {
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
  changeCurrentUser,
  onClickSignUp,
} = loginSlice.actions;
export default loginSlice.reducer;
