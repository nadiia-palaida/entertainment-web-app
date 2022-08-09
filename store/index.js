export const actions = {
  nuxtServerInit({ dispatch }) {
    dispatch('movies/getAllMovies')
  }
}
