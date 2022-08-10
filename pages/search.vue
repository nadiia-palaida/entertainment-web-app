<template>
  <div class="movies-page-wrap">
    <div class="movies-page-title title-l">
      Found {{ movies.length }} results for {{ search }}
    </div>
    <div class="movies-page-items">
      <div class="row">
        <div v-for="(item, index) in movies" class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6"
             :key="`movie-recommended-${index}`">
          <MovieCard :movie="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard";

export default {
  name: "search",
  components: {MovieCard},
  computed: {
    search() {
      return this.$store.getters['movies/searchValue']
    },
    movies() {
      return this.$store.getters['movies/searchResultsArr']
    }
  }
}
</script>

<style scoped>

</style>
