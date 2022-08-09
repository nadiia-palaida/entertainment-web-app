<template>
  <div class="movie-card">
    <div class="movie-card-img-wrap">
      <img :srcset="`${getImage(movie.thumbnail.regular.small)} 320w,
                     ${getImage(movie.thumbnail.regular.medium)} 440w,
                     ${getImage(movie.thumbnail.regular.large)} 560w,
          `"
           :src="movie.thumbnail.regular.large" :alt="movie.title" class="movie-card-img">

      <button class="bookmark" :class="{active: movie.isBookmarked}">
        <span class="bookmark-bg"></span>
        <Icon v-if="movie.isBookmarked" src="bookmark-fill" width="12" height="14" color="#fff" class="bookmark-icon"/>
        <Icon v-else src="bookmark" width="12" height="14" color="#fff" class="bookmark-icon"/>
      </button>
    </div>

    <div class="">
      <ul class="trending-card-info-list movie-card-info-list text-m text-opacity">
        <li class="trending-card-info-item">{{movie.year}}</li>
        <li class="trending-card-info-item">
          <Icon src="movies" width="12" height="12" class="trending-card-movie-icon"/>
          <span>{{movie.category}}</span>
        </li>
        <li class="trending-card-info-item trending-card-info-category">{{movie.rating}}</li>
      </ul>
      <div class="trending-card-name movie-card-name title-xs">
        {{ movie.title }}
      </div>
    </div>


  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "MovieCard",
  components: {Icon},
  props: {
    movie: {type: Object, required: true}
  },
  methods: {
    getImage(path) {
      return require('../assets/' + path)
    },
  }
}
</script>

<style scoped>

</style>
