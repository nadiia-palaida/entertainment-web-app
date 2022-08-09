import movies from '../api/movies'

// initial state
export const state = () => ({
  all: []
})

// getters
export const getters = {
  allMovies: state => {
    return state.all
  },
  trendingMovies: state => {
    return state.all.filter(movie => movie.isTrending === true)
  }
}

// actions
export const actions = {
  getAllMovies ({ commit }) {
    commit('setMovies', movies)
  },
}

// mutations
export const mutations = {
  setMovies (state, movies) {
    state.all = movies
  }
}

