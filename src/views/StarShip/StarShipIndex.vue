<template>
    <div class="">
        <div v-if="!ships.isLoading">
            <table class="table-auto w-full border">
                <thead>
                    <tr class="text-left bg-gray-800 text-white">
                        <th>
                            <p>Ship Name</p>
                            <p class="font-thin text-sm">Class</p>
                        </th>
                        <th>
                            <p>Manufacturer</p>
                            <p class="font-thin text-sm">Model</p>
                        </th>
                        <th class="text-right">Crew</th>
                        <th class="text-right">Passengers</th>
                        <th class="text-right">Hyperdriver Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <StarShipRow v-for="ship in ships.results" :key="ship.url" :ship="ship" />
                </tbody>
            </table>
            Count: {{ ships.count }}
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import StarShipRow from './StarShipRow'

export default {
    name: "StarShipIndex",
    components: { StarShipRow },
    mounted(){
        this.loadData()
    },
    methods:{
        loadData(page=1){
            this.$store.dispatch('getShips', page)
        }
    },
    computed: {
        ...mapState(['ships'])
    }
}

</script>