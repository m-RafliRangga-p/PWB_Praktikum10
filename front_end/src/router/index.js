import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/Home.vue'
import AboutComponent from '../components/About.vue'
import ServicesComponent from '../components/Services.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutComponent
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
