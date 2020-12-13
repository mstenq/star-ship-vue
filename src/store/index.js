import Vue from 'vue'
import Vuex from 'vuex'
const baseUrl = 'https://swapi.dev/api/'


Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    ships: {isLoading: true} ,
    manufacturers: []     
  },
  mutations: {
    setShips (state, payload) {
      state.ships = payload
    },
    /**
     * Parse out the unique manufacturers and save them to the store.
     * @param {object} state 
     * @param {object} payload - This should be the JSON response object from SWAPI ships api.
     */
    setUniqueManufacturers(state, payload){
      var manufacturers = state.manufacturers
      payload.results.forEach(ship => {
        let shipsManufacturers = ship.manufacturer.split(', ')
        manufacturers = [...manufacturers, ...shipsManufacturers]
      })
      //Use SET to get unique values
      let uniqueManufacturers = [...new Set(manufacturers)]
      state.manufacturers = uniqueManufacturers.sort()
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
          context.commit('setUniqueManufacturers', payload)
        }
      }
  }
})
