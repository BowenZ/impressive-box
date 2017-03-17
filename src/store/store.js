import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentFace: 0,
    currentStep: 0,
    impress: null,
    dive: false
  },
  getters: {
    impress: state => state.impress,
    dive: state => state.dive
  },
  mutations: {
    init(state, obj){
      state.impress = obj
    },
    next(state){
      state.impress.next()
    },
    prev(state){
      state.impress.prev()
    },
    goto(state, index, duration){
      state.impress.goto(index)
    }
  }
})