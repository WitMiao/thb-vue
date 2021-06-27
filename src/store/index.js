import Vue from 'vue';
import Vuex from 'vuex';
import header from './header.js'
Vue.use(Vuex);

const state = {};

const mutations = {};

const actions = {};

const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    header,
  },
});
