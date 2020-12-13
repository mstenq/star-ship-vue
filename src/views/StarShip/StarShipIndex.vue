<template>
    <div class="">
        <div v-if="!ships.isLoading">
            <div class="flex justify-end py-4">
                <ManufacturerFilter @filter="updateFilter" />
            </div>
            <table class="table-auto w-full border">
                <StarShipHeader />
                <tbody>
                    <StarShipRow v-for="ship in filteredShips" :key="ship.url" :ship="ship" />
                </tbody>
            </table>
            <div class="flex justify-between items-center py-2">
                <p>Count: {{ ships.count }}</p>
                <div class="flex space-x-2">
                    <button 
                        @click="loadData(prevPage)"
                        :disabled="!prevPage"
                        class="btn">
                        Prev
                    </button>
                    <button 
                        @click="loadData(nextPage)"
                        :disabled="!nextPage"
                        class="btn">
                        Next
                    </button>
                </div>
            </div>
        </div>
        <div v-else class="flex justify-center pt-8">
            <img src="@/assets/images/loading.gif"/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import StarShipHeader from './StarShipHeader'
import StarShipRow from './StarShipRow'
import ManufacturerFilter from './ManufacturerFilter'

export default {
    name: "StarShipIndex",
    components: { StarShipHeader, StarShipRow, ManufacturerFilter },
    data(){
        return{
            manufacturerFilter: null
        }
    },
    mounted(){
        this.loadData()
    },
    computed: {
        ...mapState(['ships']),
        nextPage(){
            return this.getPageFromURL(this.ships.next)
        },
        prevPage(){
            return this.getPageFromURL(this.ships.previous)
        },
        filteredShips(){
            //If no filter set, return all
            if(!this.manufacturerFilter){
                return this.ships.results
            }

            //Filter ships by manufacturer
            var ships = [...this.ships.results]
            return ships.filter( ship => {
                return ship.manufacturer
                    .toLowerCase()
                    .includes(this.manufacturerFilter)
            })
        }
    },
    methods:{
        loadData(page=1){
            this.$store.dispatch('getShips', page)
        },
        updateFilter(manufacturer){
            this.manufacturerFilter = manufacturer.toLowerCase()
        }
    }
}

</script>