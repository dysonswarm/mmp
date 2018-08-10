import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    type: 'wide',
    title: 'Wide'
  },
  mutations: {
    changeShot(state, { type, title }) {
      state.type = type;
      state.title = title;
    },
  },
  actions: {

  },
});
