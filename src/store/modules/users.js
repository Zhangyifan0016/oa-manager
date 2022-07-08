import UsersApi from '../../api/users'
import { setItem, getItem } from '../../utils/storage'
export default {
  namespaced: true,
  state: {
    token: getItem('token') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem('token', token)
    }
  },
  actions: {
    async handleLogin({ commit }, payload) {
      const res = await UsersApi.login(payload)
      commit('setToken', res.token)
      return res
    }
  }
}
