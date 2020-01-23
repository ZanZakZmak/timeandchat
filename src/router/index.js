import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "login" */  '../views/Signup.vue') 
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: () => import(/* webpackChunkName: "login" */  '../views/UserProfile.vue') 
  },
  {
    path: '/yourprofile',
    name: 'yourprofile',
    component: () => import(/* webpackChunkName: "login" */  '../views/YourProfile.vue') 
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import(/* webpackChunkName: "login" */  '../views/Edit.vue') 
  },
  {
    path: '/searchfriends',
    name: 'searchfriends',
    component: () => import( '../views/SearchFriends.vue')
  },
  {
    path: '/profilescity',
    name: 'profilescity',
    component: () => import(/* webpackChunkName: "login" */  '../views/ProfilesCity.vue') 
  },
  {
    path: '/newyorkprofile',
    name: 'newyorkprofile',
    component: () => import('../components/cities/NewYorkProfile.vue')
  },
  {
    path: '/berlinprofile',
    name: 'berlinprofile',
    component: () => import('../components/cities/BerlinProfile.vue')
  },
  {
    path: '/losangelesprofile',
    name: 'losangelesprofile',
    component: () => import('../components/cities/LosAngelesProfile.vue')
  },
  {
    path: '/madridprofile',
    name: 'madridprofile',
    component: () => import('../components/cities/MadridProfile.vue')
  },
  {
    path: '/vancouverprofile',
    name: 'vancouverprofile',
    component: () => import('../components/cities/VancouverProfile.vue')
  },
  {
    path: '/phoenixprofile',
    name: 'phoenixprofile',
    component: () => import('../components/cities/PhoenixProfile.vue')
  },
  /*
  {
    path: '/denverprofile',
    name: 'denverprofile',
    component: () => import('../components/cities/DenverProfile.vue')
  },
  {
    path: '/costaricaprofile',
    name: 'costaricaprofile',
    component: () => import('../components/cities/CostaricaProfile.vue')
  },
  {
    path: '/chicagoprofile',
    name: 'chicagorprofile',
    component: () => import('../components/cities/ChicagoProfile.vue')
  },
  */
  {
    path: '/moscowprofile',
    name: 'moscowprofile',
    component: () => import('../components/cities/MoscowProfile.vue')
  },
  /*
  {
    path: '/jamaicaprofile',
    name: 'jamaicaprofile',
    component: () => import('../components/cities/JamaiceProfile.vue')
  },
  */
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
