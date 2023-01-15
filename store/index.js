export const actions = {
  nuxtServerInit({ dispatch }) {
    dispatch('movies/getAllMovies')
  },

  nuxtClientInit({ dispatch }) {
    dispatch('movies/getAllMovies')
  }
}
