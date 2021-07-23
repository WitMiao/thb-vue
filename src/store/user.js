import { reqGetUserInfo, reqSignIn, reqLogout } from '@/api';

const state = {
  token: localStorage.getItem('TOKEN_KEY'),
  userInfo: {},
};

const mutations = {
  RECEIVE_TOKEN(state, value) {
    state.token = value;
  },
  RESET_TOKEN(state) {
    state.token = '';
  },
  RECEIVE_USERINFO(state, value) {
    state.userInfo = value;
  },
  RESET_USERINFO(state) {
    state.userInfo = {};
  },
};

const actions = {
  async userLogin({ commit }, userInfo) {
    const result = await reqSignIn(userInfo);
    if (result.status === 'success') {
      commit('RECEIVE_TOKEN', result.token);
      localStorage.setItem('TOKEN_KEY', result.token);
    }
    return result;
  },

  async getUserInfo({ commit }) {
    const result = await reqGetUserInfo();
    if (result.status === 'success') {
      commit('RECEIVE_USERINFO', result.userinfo);
    }
    return result;
  },

  async userLogout({ commit }) {
    const result = await reqLogout();
    if (result.status === 'success') {
      commit('RESET_TOKEN');
      localStorage.removeItem('TOKEN_KEY');
      commit('RESET_USERINFO');
    }
    return result;
  },
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
