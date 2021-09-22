

import { createStore } from "vuex";

const store = createStore({
  state: {
    loadSpinner: false,
    modal:{
      ShowModal: false,
      logRegModal: false
    },
    auth: {
      token: localStorage.getItem("auth"),
      user: [],
      retypePwd: false,
    },
  },

  getters: {
    isLoggedIn(state) {
      if(state.auth.token)
      {
        return true;
      }
      else{
        return false;
      }
    },

    re_Login(state) {
      if(state.auth.token)
      {
        return true;
      }
      else{
        return false;
      }
    },

    isShowModal(state) {
      return state.modal.ShowModal;
    },

    isLogRegModal(state) {
      return state.modal.logRegModal;
    },

    isLoadSpinner(state) {
      return state.loadSpinner;
    },

  },

  mutations: {
    loadSpinner(state, status) {
      state.loadSpinner = status;      
    },
    ModalShow(state, status) {
      state.modal.ShowModal = status;      
    },
    LOGIN(state, status) {
      state.auth.token = status;
      state.auth.user = [];
    },

    re_Login(state, status) {
      state.auth.retypePwd = status;
      state.auth.user = [];
    },

    log_reg_modal(state, status) {
      state.modal.logRegModal = status;
    },


    AUTH_USER(state, user) {
      state.auth.user = user;
    },
  },

  actions: {},
});

export default store;
