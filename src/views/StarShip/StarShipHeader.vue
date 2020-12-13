<template>
    <thead>
        <tr class="text-left bg-gray-800 text-white">
            <th>
                <SortButton class="block font-bold" v-on="$listeners" sortKey="name" :sortInfo="sortInfo" >
                    Ship Name
                </SortButton>
                <SortButton class="block" v-on="$listeners" sortKey="starship_class" :sortInfo="sortInfo" >
                    Class
                </SortButton>
            </th>
            <th>
                <SortButton class="block font-bold" v-on="$listeners" sortKey="manufacturer" :sortInfo="sortInfo" >
                    Manufacturer
                </SortButton>
                <SortButton class="block" v-on="$listeners" sortKey="model" :sortInfo="sortInfo" >
                    Model
                </SortButton>
            </th>
            <th class="text-right">
                <SortButton class="block font-bold" v-on="$listeners" sortKey="crew" :sortInfo="sortInfo" >
                    Crew
                </SortButton>
            </th>
            <th class="text-right">
                <SortButton class="block font-bold" v-on="$listeners" sortKey="passengers" :sortInfo="sortInfo" >
                    Passengers
                </SortButton>
            </th>
            <th class="text-right">
                <SortButton class="block font-bold" v-on="$listeners" sortKey="hyperdrive_rating" :sortInfo="sortInfo" >
                    Hyperdrive
                </SortButton>
            </th>
        </tr>
    </thead>
</template>

<script>
import SortButton from '@/components/SortButton'

export default {
    name: "StarShipHeader",
    props: {
        sortInfo: Object,
    },
    components: { SortButton }
}
</script>