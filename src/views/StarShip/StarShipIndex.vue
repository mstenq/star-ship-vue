<template>
    <div class="">
        <div v-if="!ships.isLoading">
            <table class="table-auto w-full border">
                <StarShipHeader />
                <StarShipRow v-for="ship in ships.results" :key="ship.url" :ship="ship" />
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
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import StarShipHeader from './StarShipHeader'
import StarShipRow from './StarShipRow'

export default {
    name: "StarShipIndex",
    components: { StarShipHeader, StarShipRow },
    mounted(){
        this.loadData()
    },
    methods:{
        loadData(page=1){
            this.$store.dispatch('getShips', page)
        }
    },
    computed: {
        ...mapState(['ships']),
        nextPage(){
            return this.getPageFromURL(this.ships.next)
        },
        prevPage(){
            return this.getPageFromURL(this.ships.previous)
        }
    }
}

</script>