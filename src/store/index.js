import { createStore } from 'vuex'
import users from './modules/users'
import getters from './getters'

export default createStore({
  getters,
  modules: {
    users
  }
})
