import ToursService from '../services/ToursService'

const state = {
  tours: [],
  tour: {},
  error: null
}

const mutations = {
  SET_TOURS: (state, payload) => {
    state.tours = payload
  },
  SET_TOUR: (state, payload) => {
    state.tour = payload
  },
  SET_ERROR: (state, error) => {
    state.error = error
  }
}

const actions = {
  getAllTours: async ({ commit }, payload = '') => {
    try {
      const response = (await ToursService.GET_ALL_TOURS(payload)).data
      commit('SET_TOURS', response.data.data)
    } catch (error) {
      commit('SET_ERROR', error.response.data.message)
    }
  },
  getTour: async ({ commit }, payload) => {
    try {
      const response = (await ToursService.GET_TOUR(payload)).data
      commit('SET_TOUR', response.data.data)
    } catch (error) {
      commit('SET_ERROR', error.response.data.message)
    }
  }
}

const getters = {
  tours: state => state.tours,
  tour: state => state.tour
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
