import UsersApi from '../../api/users'
import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    manager: getItem('manager') || '',
    permissionList: ''
  },
  mutations: {
    setManager(state, manager) {
      state.manager = manager
      setItem('manager', manager)
    },
    setPermissionList(state, permissionList) {
      state.permissionList = permissionList
    }
  },
  actions: {
    async handleLogin({ commit }, payload) {
      const res = await UsersApi.login(payload)
      console.log(res)
      commit('setManager', res)
      return res
    },
    async getPermissionList({ commit }) {
      const res = await UsersApi.getPermissionList()
      commit('setPermissionList', res)
      return res
    },
    logout({ commit }) {
      commit('setManager', '')
      commit('setPermissionList', '')
    }
  }
}
