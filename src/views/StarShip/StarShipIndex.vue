<template>
    <div>
        <!-- TABLE -->
        <div v-if="!ships.isLoading && !ships.errorMessage">
            <div class="flex justify-between py-4 items-center">
                <p>Found: {{ filteredShips.length }}</p>
                <ManufacturerFilter @filter="updateFilter" />
            </div>
            <table class="table-auto w-full border">
                <StarShipHeader @sort="updateSort" :sortInfo="{sortBy, sortDirection}" />
                <tbody>
                    <StarShipRow v-for="ship in sortedShips" :key="ship.url" :ship="ship" />
                </tbody>
            </table>
        </div>


        <!-- ERROR MESSAGE -->
        <div v-else-if="!ships.isLoading" class="pt-8">
                <p class="font-bold text-gray-400 text-sm">ERROR</p>
                <h2 class="text-3xl font-thin">{{ ships.errorMessage }}</h2>
        </div>

        <!-- LOADING SCREEN -->
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
            manufacturerFilter: null,
            sortBy: 'name',
            sortDirection: 'asc'
        }
    },
    mounted(){
        this.loadData()
    },
    computed: {
        ...mapState(['ships']),
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
        },
        sortedShips(){
            var ships = this.filteredShips
            var sortDirectionA = this.sortDirection === "asc" ? 1 : -1
            var sortDirectionB = this.sortDirection === "asc" ? -1 : 1
            return ships.sort((a,b) => {
                return a[this.sortBy].toLowerCase() > b[this.sortBy].toLowerCase() ? sortDirectionA : sortDirectionB
            })
        }
    },
    methods:{
        loadData(){
            this.$store.dispatch('getShips')
        },
        updateFilter(manufacturer){            
            this.manufacturerFilter = manufacturer.toLowerCase()
        },
        updateSort(value){
            //see if sort direction needs to change
            if( this.sortBy === value && this.sortDirection === "asc"){
                this.sortDirection = "desc"
            }else{
                this.sortDirection = "asc"
            }

            //Update the sortBy key
            this.sortBy = value
        }
    }
}

</script>