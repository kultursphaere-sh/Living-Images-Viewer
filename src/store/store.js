import Vue from 'vue'
import Vuex from 'vuex'
import institution from './modules/institution'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    institution
  }
})

export default store
