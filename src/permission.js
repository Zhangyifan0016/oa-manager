// 引入router
import router from './router'
// 引入vuex
import store from './store'
// 设置白名单
const whiteList = ['/login']

// 挂载路由守卫
router.beforeEach(async (to, from, next) => {
  // 获取token
  const token = store.getters.manager.token
  // 获取用户权限
  const permissionList = store.getters.permissionList
  if (token) {
    if (to.path === '/login') {
      next(from.path)
    } else {
      if (!permissionList) {
        // 调取用户权限
        const res = await store.dispatch('users/getPermissionList')
        console.log(res)
        if (res) {
          // 获取用户所拥有的路由权限
          const { menuList } = res
          console.log(menuList)

          next()
        } else {
          next('/login')
        }
      }
      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
