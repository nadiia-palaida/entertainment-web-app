import Vue from 'vue'
import Router from 'vue-router'

import Home from '~/pages/index'
import Movies from '~/pages/movies'
import TvSeries from '~/pages/tv-series'
import Bookmarks from '~/pages/bookmarks'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/movies',
        name: 'movies',
        component: Movies
      },
      {
        path: '/tv-series',
        name: 'tv-series',
        component: TvSeries
      },
      {
        path: '/bookmarks',
        name: 'bookmarks',
        component: Bookmarks
      },
    ]
  })
}
