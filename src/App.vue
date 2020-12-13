<template>
  <div id="app">
    <Nav/>

    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-8">
        <router-view/>
      </div>
    </main>
    
  </div>
</template>

<script>
import Nav from './components/Nav'
import StarShipIndex from './views/StarShip/StarShipIndex'

export default {
  name: 'App',
  components: { Nav }  
}
</script>