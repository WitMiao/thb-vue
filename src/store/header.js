const state = {
  loginDialog: false,
  registerDialog: false,
};

const mutations = {
  OPENLOGINDIALOG(state) {
    state.loginDialog = true;
  },
  CLOSELOGINDIALOG(state) {
    state.loginDialog = false;
  },
  SETLOGINDIALOG(state, value) {
    state.loginDialog = value;
  },
  OPENREGISTERDIALOG(state) {
    state.registerDialog = true;
  },
  CLOSEREGISTERDIALOG(state) {
    state.registerDialog = false;
  },
  SETREGISTERIALOG(state, value) {
    state.registerDialog = value;
  },
};

const actions = {
  firstOpenRegisterDialog(content) {
    content.commit('OPENLOGINDIALOG');
    content.commit('OPENREGISTERDIALOG');
  },
  closeAllDialog(content){
    content.commit('CLOSEREGISTERDIALOG');
    content.commit('CLOSELOGINDIALOG');
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
