const state = {
  headHeight: '',
};

const mutations = {
  CHANGEFIXED(state, clientHeight) {
    state.headHeight = clientHeight - 20 + 'px';
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
