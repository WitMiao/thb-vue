const state = {
  loginDialog: false,
  registerDialog: false,
  isLoading: false,
};

const mutations = {
  OPEN_LOGIN_DIALOG(state) {
    state.loginDialog = true;
  },
  CLOSE_LOGIN_DIALOG(state) {
    state.loginDialog = false;
  },
  SET_LOGIN_DIALOG(state, value) {
    state.loginDialog = value;
  },
  OPEN__REGISTER_DIALOG(state) {
    state.registerDialog = true;
  },
  CLOSE_REGISTER_DIALOG(state) {
    state.registerDialog = false;
  },
  SET_REGISTER_DIALOG(state, value) {
    state.registerDialog = value;
  },
  START_LOADING() {
    state.isLoading = true;
  },
  FINISH_LOADING() {
    state.isLoading = false;
  },
  SET_LOADING(state, value) {
    state.isLoading = value;
  },
};

const actions = {
  firstOpenRegisterDialog({commit}) {
    commit('OPEN_LOGIN_DIALOG');
    commit('OPEN__REGISTER_DIALOG');
  },
  closeAllDialog({commit}) {
    commit('CLOSE_REGISTER_DIALOG');
    commit('CLOSE_LOGIN_DIALOG');
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
