import { createRouter, createWebHashHistory } from 'vue-router'

const PublicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    name: 'home',
    path: '/',
    meta: {
      title: '首页'
    },
    component: () => import('../layout'),
    redirect: '/welcome',
    children: [
      {
        name: 'welcome',
        path: '/welcome',
        meta: {
          title: '欢迎体验Vue3全栈课程'
        },
        component: () => import('../views/welcome')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: PublicRoutes
})

export default router
