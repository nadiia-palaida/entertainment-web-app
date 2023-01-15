import movies from '../api/movies'

// initial state
export const state = () => ({
  all: [],
  search: '',
  searchResults: []
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
  },

  searchValue: state => {
    return state.search
  },
  searchResultsArr: state => {
    return state.searchResults
  }
}

// mutations
export const mutations = {
  setMovies(state, movies) {
    state.all = movies
  },
  toggleBookmarked(state, id) {
    state.all.forEach(movie => {
      if (movie.id === id) {
        movie.isBookmarked = !movie.isBookmarked
      }
    })
  },

  setSearch(state, search) {
    state.search = search
  },
  startSearch(state, search) {
    state.search = search

    state.searchResults = state.all.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
  }
}

// actions
export const actions = {
  getAllMovies({commit}) {
    console.log('getAllMovies')
    commit('setMovies', movies)
  }
}

