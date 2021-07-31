import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// Lazy load routes
const Play = () => import(/* webpackChunkName: "rumi" */ '../game/Play');
const New = () => import(/* webpackChunkName: "rumi" */ '../game/New');
const Join = () => import(/* webpackChunkName: "rumi" */ '../game/Join');
const Rules = () => import('../views/Rules');

// Define routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play/:id?',
    name: 'Play',
    component: Play
  },
  {
    path: '/new',
    name: 'New',
    component: New
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },
  {
    path: '/how-to-play',
    name: 'Rules',
    component: Rules
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
 