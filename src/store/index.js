import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions';
import mutations from './mutations';
import baseState from './state';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ...baseState
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  }
});

export default store