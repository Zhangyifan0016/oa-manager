import Layout from '../../layout'

export default {
  path: '/system',
  component: Layout,
  menuName: '系统管理',
  meta: {
    title: '系统管理',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: '/system/user',
      component: () => import('../../views/article-create'),
      meta: {
        title: '用户管理'
      }
    }
  ]
}
