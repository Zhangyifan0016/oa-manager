import { createRouter, createWebHashHistory } from 'vue-router'

const PublicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: PublicRoutes
})

export default router
