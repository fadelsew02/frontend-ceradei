import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AcademicSpaceView from '../views/AcademicSpaceView.vue'
import CulturelSpaceView from '../views/CulturelSpaceView.vue'

import ExploreView from '../views/ExploreView.vue'
import HelpView from '../views/HelpAndSupport.vue'
import RejoindreNousView from '../views/RejoindreNousView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView 
    },
    {
      path: '/academic_space',
      name: 'academic',
      component: AcademicSpaceView
    },
    {
      path: '/culturel_space',
      name: 'culturel',
      component: CulturelSpaceView
    },
    {
      path: '/explore',
      name: 'exploration',
      component: ExploreView
    },
    {
      path: '/help_and_support',
      name: 'help',
      component: HelpView
    },
    {
      path: '/join_us',
      name: 'join_us',
      component:RejoindreNousView
    }
  ]
})

export default router
