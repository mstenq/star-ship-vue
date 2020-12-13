<template>
    <tbody>
        <tr>
            <td>
                <p class="font-bold">{{ ship.name }}</p>
                <p class="text-gray-600">{{ ship.starship_class }}</p>
            </td>
            <td>
                <p class="font-bold">{{ ship.manufacturer }}</p>
                <p class="text-gray-600">{{ ship.model }}</p>
            </td>
            <td class="text-right">{{ ship.crew }}</td>
            <td class="text-right">{{ ship.passengers }}</td>
            <td class="text-right">{{ ship.hyperdrive_rating }}</td>
        </tr>
    </tbody>
</template>

<script>
export default {
    name: 'StarShipRow',
    props: {
        ship: Object
    }
}
</script>