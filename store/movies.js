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
  allMoviesType: state => {
    return state.all.filter(movie => movie.category === 'Movie')
  },
  allTvSeriesType: state => {
    return state.all.filter(movie => movie.category === 'TV Series')
  },
  allBookmarkMovies: state => {
    return state.all.filter(movie => movie.isBookmarked === true && movie.category === 'Movie')
  },
  allBookmarkTvSeries: state => {
    return state.all.filter(movie => movie.isBookmarked === true && movie.category === 'TV Series')
  },
  trendingMovies: state => {
    return state.all.filter(movie => movie.isTrending === true)
  }
}

// mutations
export const mutations = {
  setMovies(state, movies) {
    state.all = movies
  },
  toggleBookmarked(state, id) {
    console.log('movie', id)

    state.all.forEach(movie => {
      if (movie.id === id) {
        console.log('movie', movie)

        movie.isBookmarked = !movie.isBookmarked
      }
    })
  },
}

// actions
export const actions = {
  getAllMovies({commit}) {
    commit('setMovies', movies)
  }
}

