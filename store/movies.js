import movies from '../api/movies'

// initial state
export const state = () => ({
  all: []
})

// getters
export const getters = {
  allMovies: state => {
    return state.all
  }
}

// actions
export const actions = {
  getAllMovies ({ commit }) {
    commit('setMovies', movies)
  },
  getMovies ({ commit }) {
    let movies1 = ['dcfd', 'sdcdsc']
    commit('setMovies', movies1)
  },

}

// mutations
export const mutations = {
  setMovies (state, movies) {
    state.all = movies
  }
}

