import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';
import topic from "./modules/topic";
import cluster from "./modules/cluster";
import cas from "./modules/cas";
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission,
    topic,
    cluster,
    cas,
  },
  getters
});

export default store
