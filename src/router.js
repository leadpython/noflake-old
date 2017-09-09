import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '@/pages/Home.vue'
// import Authentication from '@/pages/Authentication.vue'
// import SearchProviders from '@/pages/SearchProviders.vue'
// import ProviderDashboard from '@/pages/ProviderDashboard.vue'

Vue.use(VueRouter)

/*
 * Uncomment this section and use "load()" if you want
 * to lazy load routes. */
function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/pages/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  mode: 'history',
  routes: [
    { path: '/', component: load('Home') },
    { path: '/auth', component: load('Authentication') },
    { path: '/search-providers', component: load('SearchProviders') },
    { path: '/provider-dashboard', component: load('ProviderDashboard') }
  ]
})
