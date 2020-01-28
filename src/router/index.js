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
    path: '/nysearch',
    name: 'nysearch',
    component: () => import(/* webpackChunkName: "login" */  '../components/friendsearch/Nysearch.vue') 
  },
  {
    path: '/chicagosearch',
    name: 'chicagosearch',
    component: () => import(/* webpackChunkName: "login" */  '../components/friendsearch/Chicagosearch.vue') 
  },
  /*
   {
    path: '/amsterdamsearch',
    name: 'amsterdamsearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friendsearch/AmsterdamSearch.vue') 
  },
  {
    path: '/berlinsearch',
    name: 'berlinsearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friendsearch/BerlinSearch.vue') 
  },
  {
    path: '/cairosearch',
    name: 'cairosearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/CairoSearch.vue') 
  },
  {
    path: '/denversearch',
    name: 'denversearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/DenverSearch.vue') 
  },
  {
    path: '/lagossearch',
    name: 'lagossearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friendsearch/LagosSearch.vue') 
  },
  {
    path: '/londonsearch',
    name: 'londonsearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friendsearch/LondonSearch.vue') 
  },
  {
    path: '/chicagosearch',
    name: 'chicagosearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/Chicagosearch.vue') 
  },
  {
    path: '/losangelessearch',
    name: 'losangelessearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/LosAngelesSearch.vue') 
  },
  {
    path: '/madridsearch',
    name: 'madridsearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/MadridSearch.vue') 
  },
  {
    path: '/melbournesearch',
    name: 'melbournesearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/Melbournesearch.vue') 
  },
  {
    path: '/moscowsearch',
    name: 'moscowsearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/MoscowSearch.vue') 
  },
  {
    path: '/nairobisearch',
    name: 'nairobisearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/NairobiSearch.vue') 
  },
  {
    path: '/phoenixsearch',
    name: 'phoenixsearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/PhoenixSearch.vue') 
  },
  {
    path: 'sanjosésearch',
    name: 'sanjosésearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/SanJoséSearch.vue') 
  },
  {
    path: '/seoulsearch',
    name: 'seoulsearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/SeoulSearch.vue') 
  },
  {
    path: '/sydneysearch',
    name: 'sydneysearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/SydneySearch.vue') 
  },
  {
    path: '/tokyosearch',
    name: 'tokyosearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/TokyoSearch.vue') 
  },
  {
    path: '/vancouversearch',
    name: 'vancouversearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/VancouverSearch.vue') 
  },
  {
    path: '/zagrebsearch',
    name: 'zagrebsearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/ZagrebSearch.vue') 
  },
  {
    path: '/zurichsearch',
    name: 'zurichsearch',
    component: () => import(/* webpackChunkName: "login"   '../components/friensearch/ZurichSearch.vue') 
  }, 
  */
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
  {
    path: '/denverprofile',
    name: 'denverprofile',
    component: () => import('../components/cities/DenverProfile.vue')
  },
  {
    path: '/sanjoseprofile',
    name: 'sanjoserofile',
    component: () => import('../components/cities/SanJoséProfile.vue')
  },
  {
    path: '/chicagoprofile',
    name: 'chicagorprofile',
    component: () => import('../components/cities/ChicagoProfile.vue')
  },
  {
    path: '/moscowprofile',
    name: 'moscowprofile',
    component: () => import('../components/cities/MoscowProfile.vue')
  },
  {
    path: '/londonprofile',
    name: 'londonprofile',
    component: () => import('../components/cities/LondonProfile.vue')
  },
  {
    path: '/zagrebprofile',
    name: 'zagrebprofile',
    component: () => import('../components/cities/ZagrebProfile.vue')
  },
  {
    path: '/amsterdamprofile',
    name: 'amsterdamprofile',
    component: () => import('../components/cities/AmsterdamProfile.vue')
  },
  {
    path: '/zurichprofile',
    name: 'zurichprofile',
    component: () => import('../components/cities/ZurichProfile.vue')
  },
  {
    path: '/seoulprofile',
    name: 'seoulprofile',
    component: () => import('../components/cities/SeoulProfile.vue')
  },
  {
    path: '/tokyoprofile',
    name: 'tokyoprofile',
    component: () => import('../components/cities/TokyoProfile.vue')
  },
  {
    path: '/lagosprofile',
    name: 'lagosprofile',
    component: () => import('../components/cities/LagosProfile.vue')
  },
  {
    path: '/cairoprofile',
    name: 'cairoprofile',
    component: () => import('../components/cities/CairoProfile.vue')
  },
  {
    path: '/nairobiprofile',
    name: 'nairobiprofile',
    component: () => import('../components/cities/NairobiProfile.vue')
  },
  {
    path: '/sydneyprofile',
    name: 'sydneyprofile',
    component: () => import('../components/cities/SydneyProfile.vue')
  },
  {
    path: '/melbourneprofile',
    name: 'melbourneprofile',
    component: () => import('../components/cities/MelbourneProfile.vue')
  }
  /*
 
  */
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
