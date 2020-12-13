<template>
  <div id="app">

    <!-- NAVIGATION -->
    <Nav/>


    <!-- MAIN CONTENT -->
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 pb-8">
        <router-view/>
      </div>
    </main>

    
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: { Nav }  
}
</script>