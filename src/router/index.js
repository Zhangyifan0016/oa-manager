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

const PrivateRoutes = [
  {
    path: '/system',
    name: 'system',
    redirect: '/system/user',
    meta: {
      title: '系统管理',
      icon: 'el-icon-setting'
    },
    component: () => import('../layout'),
    children: [
      {
        path: '/system/user',
        meta: {
          title: '用户管理',
          icon: 'user'
        },
        component: () => import('../views/user')
      },
      {
        path: '/system/menu',
        component: () => import('../views/menu'),
        meta: {
          title: '菜单管理',
          icon: 'menus'
        }
      },
      {
        path: '/system/role',
        component: () => import('../views/role'),
        meta: {
          title: '角色管理',
          icon: 'role'
        }
      },
      {
        path: '/system/dept',
        component: () => import('../views/dept'),
        meta: {
          title: '部门管理',
          icon: 'dept'
        }
      },
      {
        path: '/system/staff',
        component: () => import('../views/staff'),
        meta: {
          title: '员工管理',
          icon: 'staff'
        }
      },
      {
        path: '/system/salary',
        component: () => import('../views/salary'),
        meta: {
          title: '薪酬管理',
          icon: 'salary'
        }
      }
    ]
  },
  {
    path: '/audit',
    name: 'audit',
    redirect: '/audit/leave',
    meta: {
      title: '审批管理',
      icon: 'el-icon-s-promotion'
    },
    component: () => import('../layout'),
    children: [
      {
        path: '/audit/leave',
        meta: {
          title: '休假申请',
          icon: 'leave'
        },
        component: () => import('../views/leave')
      },
      {
        path: '/audit/approve',
        component: () => import('../views/approve'),
        meta: {
          title: '待审批',
          icon: 'approve'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...PublicRoutes, ...PrivateRoutes]
})

export default router
