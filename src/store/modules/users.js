import UsersApi from '../../api/users'
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async handleLogin({ commit }, payload) {
      const res = await UsersApi.login(payload)
      console.log(res)
      return res
    }
  }
}
