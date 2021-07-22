const state = {
  loginDialog: false,
  registerDialog: false,
  isLoading: false,
  isUserLogin: false,
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
  USER_LOGIN(){
    state.isUserLogin = true;
  },
  USER_LOGOUT(){
    state.isUserLogin = false;
  },
  SET_USER_LOGIN(state, value) {
    state.isUserLogin = value;
  },
};

const actions = {
  firstOpenRegisterDialog(content) {
    content.commit('OPEN_LOGIN_DIALOG');
    content.commit('OPEN__REGISTER_DIALOG');
  },
  closeAllDialog(content) {
    content.commit('CLOSE_REGISTER_DIALOG');
    content.commit('CLOSE_LOGIN_DIALOG');
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
