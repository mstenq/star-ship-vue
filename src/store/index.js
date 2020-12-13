import Vue from 'vue'
import Vuex from 'vuex'
const baseUrl = 'https://swapi.dev/api'


Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    ships: {isLoading: true} ,
    manufacturers: []     
  },
  mutations: {

    /**
     * Update ships state
     * @param {Object} state 
     * @param {Object} payload 
     */
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

      //Convert array to SET and back to filter to unique values
      let uniqueManufacturers = [...new Set(manufacturers)]
      state.manufacturers = uniqueManufacturers.sort()
    }
  },
  actions: {
    /**
     * fetches all of the ships from the API, then gets unique manufacturers.
     * @param {Object} context - current context
     */
      async getShips (context) {
        var payload = {}
        try{
          var url = `${baseUrl}/starships/`;
          var ships = []

          //Keep fetching data while we have more results available
          //Definitely a bad idea with tons of data, but for only 36 records this will be better than pagination.
          do{
            let response = await fetch(url)
            let json = await response.json()          
            ships = [...ships, ...json.results]
            url = json.next
          }while(url)

          payload = {results: ships, isLoading: false}
        }catch(e){
          //Todo: Get Actual Error message
          payload = {errorMessage: "Could not get ship data. Please try again later.", isLoading: false}
        }finally{
          context.commit('setShips', payload)
          context.commit('setUniqueManufacturers', payload)
        }
      }
  }
})
