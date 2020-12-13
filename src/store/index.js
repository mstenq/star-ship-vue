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
        try{
          const response = await fetch(`${baseUrl}starships/?page=${page}`)
          const ships = await response.json()            
          let payload = {...ships, isLoading: false}
          console.log(payload)
          context.commit('setShips', payload)
        }catch(e){

        }finally{
        }
      }
  }
})
