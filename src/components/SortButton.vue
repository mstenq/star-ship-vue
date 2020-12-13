<template>
    <button class="flex items-center"  @click="$emit('sort', sortKey )">
        <slot></slot>
        <span v-if="isBeingSortedBy" class="text-xs font-bold pl-2">
            <span v-if="sortInfo.sortDirection === 'asc'">▼</span>
            <span v-else>▲</span>
        </span>
    </button>
</template>

<script>
export default {
    name: "SortButton",
    props: {
        sortKey: String,
        sortInfo: Object
    },
    computed:{
        isBeingSortedBy(){
            return this.sortInfo.sortBy === this.sortKey
        }
    }
}
</script>