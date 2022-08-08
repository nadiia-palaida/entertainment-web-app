<template>
  <div class="trending-card">
    <img :src="movie.img" :alt="movie.name" class="trending-card-img">

    <button class="bookmark">
      <span class="bookmark-bg"></span>
      <Icon src="bookmark" width="12" height="14" color="#fff" class="bookmark-icon"/>
    </button>

    <div class="trending-card-info-wrap">
      <ul class="trending-card-info-list text-m text-opacity">
        <li class="trending-card-info-item">{{movie.year}}</li>
        <li class="trending-card-info-item">
          <Icon src="movies" width="12" height="12" class="trending-card-movie-icon"/>
          <span>{{movie.type}}</span>
        </li>
        <li class="trending-card-info-item trending-card-info-category">{{movie.category}}</li>
      </ul>
      <div class="trending-card-name title-s">
        {{ movie.name }}
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "TrendingCard",
  components: {Icon},
  props: {
    movie: {type: Object, required: true}
  }
}
</script>

<style scoped>

</style>
