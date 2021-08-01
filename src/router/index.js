import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Account from '../views/Account.vue';
import firebase from 'firebase';
//import store from '../store/index';

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
      path: '/login',
      name: 'login',
      component: Login
  },
  {
      path: '/register',
      name: 'Register',
      component: Register
  },
  {
      path: '/account',
      name: 'Account',
      component: Account,
      meta: {
        authRequired: true,
      }
  },
  {
    path: '/play/:id?',
    name: 'Play',
    component: Play,
    meta: {
      authRequired: true,
    }
  },
  {
    path: '/new',
    name: 'New',
    component: New,
    meta: {
      authRequired: true,
    }
  },
  {
    path: '/join',
    name: 'Join',
    component: Join,
    meta: {
      authRequired: true,
    }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      next({
        path: '/login',
      });
    }
  } else {
    next();
  }
});

export default router
 