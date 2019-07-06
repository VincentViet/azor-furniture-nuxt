import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const createStore = () =>
  new Vuex.Store({
    state() {
      return { count: 0 };
    },
    mutations: {
      increment(state) {
        state.count++;
      }
    }
  });

export default createStore;
