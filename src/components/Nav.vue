<template>
<div>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <img class="h-4" src="@/assets/images/star-wars-logo.png"/>
          <div>
            <div class="ml-10 flex items-baseline space-x-8">
              <router-link :to="{ name: 'StarShipIndex' }" class="nav-link">Star Ships</router-link>
              <a href="#" class="nav-link">Vehicles</a>
              <a href="#" class="nav-link">Species</a>
              <a href="#" class="nav-link">Planets</a>
              <a href="#" class="nav-link">People</a>
              <a href="#" class="nav-link">Films</a>
            </div>
          </div>
        </div>
        <div class="flex space-x-4 items-center">
          <p class="text-white">Welcome FN-2187</p>
          <img class="avatar" src="@/assets/images/avatar.png"/>
        </div>
      </div>
    </div>
  </nav>

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
        {{ $route.meta.title }}
      </h1>
    </div>
  </header>
  
</div>
</template>

<style scoped>
.router-link-active{
    @apply bg-gray-900 text-white;
}
.avatar{
  @apply rounded-full object-cover;
  width: 40px;
  height: 40px;
}

.nav-link{
  @apply text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium;
}
</style>