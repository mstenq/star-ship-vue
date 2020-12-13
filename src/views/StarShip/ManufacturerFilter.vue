<template>
    <div class="flex space-x-2">


        <!-- SELECT FILTER -->
        <select 
            @change="$emit('filter', manufacturerFilter)" 
            v-model="manufacturerFilter" 
            class="border shadow rounded py-1 px-2"
        >
            <option value="">Showing All Manufacturers</option>
            <option v-for="manufacturer in manufacturers" :value="manufacturer" :key="manufacturer">{{ manufacturer }}</option>
        </select>


        <!-- CLEAR BUTTON -->
        <button :disabled="!manufacturerFilter" @click="showAll()" class="btn">Clear</button>

        
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return{
            manufacturerFilter: ''
        }
    },
    computed:{
        ...mapState(['manufacturers'])
    },
    methods:{
        showAll(){
            this.manufacturerFilter = ''
            this.$emit("filter", this.manufacturerFilter)
        }
    }
}
</script>