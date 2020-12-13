import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'StarShipIndex',
    meta: {title: "Star Ships"},
    component: () => import(/* webpackChunkName: "starshipindex" */ '../views/StarShip/StarShipIndex.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
