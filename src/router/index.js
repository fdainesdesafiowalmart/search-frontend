import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/layout/Home.vue'
import PageNotFound from '../views/PageNotFound.vue'
import SearchPage from '../views/SearchPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'SearchPage',
        component: SearchPage
      },
      {
        path: '*',
        name: 'NotFound',
        component: PageNotFound
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
