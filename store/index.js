export const actions = {
  nuxtServerInit({ dispatch }) {
    console.log('nuxtServerInit')
    dispatch('movies/getAllMovies')
  }
}
