const state = {
  loginDialog: false,
};

const mutations = {
  CLOSELOGINDIALOG(state) {
    state.loginDialog = false;
  },
  SETLOGINDIALOG(state, value) {
    state.loginDialog = value;
  },
};

const actions = {};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
