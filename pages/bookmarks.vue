<template>
  <div class="movies-page-wrap">
    <div class="bookmarks-movies">
      <div class="movies-page-title title-l">
        Bookmarked Movies
      </div>
      <div class="movies-page-items">
        <div class="row">
          <div v-for="(item, index) in bookmarkMovies"  class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6" :key="`movie-recommended-${index}`">
            <MovieCard :movie="item"/>
          </div>
        </div>
      </div>
    </div>

    <div class="bookmarks-movies">
      <div class="movies-page-title title-l">
        Bookmarked TV Series
      </div>
      <div class="movies-page-items">
        <div class="row">
          <div v-for="(item, index) in bookmarkTvSeries"  class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6" :key="`movie-recommended-${index}`">
            <MovieCard :movie="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";
export default {
  name: "bookmarks",
  components: {MovieCard},
  computed: {
    bookmarkMovies() {
      return this.$store.getters['movies/allBookmarkMovies']
    },
    bookmarkTvSeries() {
      return this.$store.getters['movies/allBookmarkTvSeries']
    }
  }
}
</script>

<style scoped>

</style>
