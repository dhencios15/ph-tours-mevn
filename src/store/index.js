import Vue from 'vue'
import Vuex from 'vuex'
import cookie from 'vue-cookies'
import router from '../router'
import useState from 'vuex-persistedstate'
import tourState from 'vuex-persistedstate'
import tours from './tour-store'
import Authenticate from '../services/AuthService'
import UserService from '../services/UserService'

Vue.use(Vuex)

const successCommit = (commit, response, router) => {
  commit('SET_USER', response.data.user)
  commit('IS_USER_LOGIN', true)
  cookie.set('jwt', response.token, '1d')
  commit('SET_LOADING', false)
  commit('SET_ERROR', null)
  router.push('/')
}

const errorCommit = (commit, error) => {
  commit('SET_LOADING', false)
  commit('SET_ERROR', error.response.data.message)
  console.log(error.response.data.message)
}

export default new Vuex.Store({
  strict: true,
  plugins: [
    useState({
      key: '_reus',
      paths: ['user', 'isLoggedIn']
    }),
    tourState({
      key: '-tours-',
      paths: ['tours.tours', 'tours.tour']
    })
  ],
  state: {
    user: null,
    error: null,
    isLoggedIn: false,
    loading: false
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.user = payload
    },
    IS_USER_LOGIN: (state, payload) => {
      state.isLoggedIn = payload
    },
    SET_ERROR: (state, error) => {
      state.error = error
    },
    SET_LOADING: (state, payload) => {
      state.loading = payload
    }
  },
  actions: {
    login: async ({ commit }, payload) => {
      try {
        commit('SET_LOADING', true)
        const response = (await Authenticate.login(payload)).data
        successCommit(commit, response, router)
      } catch (error) {
        errorCommit(commit, error)
      }
    },
    signup: async ({ commit }, payload) => {
      try {
        commit('SET_LOADING', true)
        const response = (await Authenticate.signup(payload)).data
        successCommit(commit, response, response)
      } catch (error) {
        errorCommit(commit, error)
      }
    },
    updateUser: async ({ commit }, payload) => {
      try {
        commit('SET_LOADING', true)
        const response = (await UserService.updateUser(payload)).data
        commit('SET_USER', response.data.user)
        commit('IS_USER_LOGIN', true)
        commit('SET_LOADING', false)
        commit('SET_ERROR', null)
      } catch (error) {
        errorCommit(commit, error)
      }
    }
  },
  modules: { tours }
})
