import Vue from 'vue'
import Vuex from 'vuex'
const baseUrl = 'https://swapi.dev/api/'


Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    ships: {isLoading: true}      
  },
  mutations: {
    setShips (state, payload) {
      state.ships = payload
    }
  },
  actions: {
      async getShips (context, page = 1) {
        var payload = {}
        try{
          const response = await fetch(`${baseUrl}starships/?page=${page}`)
          const ships = await response.json()            
          payload = {...ships, isLoading: false}
        }catch(e){
          //Todo: Get Actual Error message
          payload = {errorMessage: "Could not get ships", isLoading: false}
        }finally{
          context.commit('setShips', payload)
        }
      }
  }
})
