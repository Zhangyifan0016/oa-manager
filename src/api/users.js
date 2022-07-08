import request from '../utils/request'

// 用户登录
const login = (data) => {
  return request({ url: '/users/login', method: 'POST', data })
}

// 用户列表
const getUserList = () => {
  return request({ url: '/users/list', method: 'GET' })
}

// 所有用户列表
const getUserAllList = () => {
  return request({ url: '/users/all/list', method: 'GET' })
}

// 用户权限列表
const getPermissionList = () => {
  return request({ url: '/users/getPermissionList', method: 'GET' })
}
export default { login, getUserList, getUserAllList, getPermissionList }
