<template>
  <div>
    <div class="trending-wrap">
      <div class="trending-title title-l">
        Trending
      </div>
      <div>
        <Hooper :settings="hooperSettings">
          <slide v-for="(item, index) in trendingMovies" :key="`trending-slide-${index}`">
            <div>
              <TrendingCard :movie="item"/>
            </div>
          </slide>
        </Hooper>
      </div>
    </div>

    <div class="recommended-wrap">
      <div class="recommended-title title-l">
        Recommended for you
      </div>
      <div class="row">
        <div v-for="(item, index) in allMovies"  class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6" :key="`movie-recommended-${index}`">
          <MovieCard :movie="item"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Menu from "../components/Menu";
import TrendingCard from "../components/TrendingCard";
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import MovieCard from "../components/MovieCard";

export default {
  name: 'IndexPage',
  components: {MovieCard, TrendingCard, Menu, Hooper, Slide},
  computed: {
    allMovies() {
      return this.$store.getters['movies/allMovies']
    },
    trendingMovies() {
      return this.$store.getters['movies/trendingMovies']
    }
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2.5,
        autoPlay: true,
        playSpeed: 3000,
        infiniteScroll: true,
        breakpoints: {
          1400: {
            itemsToShow: 2.5
          },
          1000: {
            itemsToShow: 2,
            centerMode: true
          },
          768: {
            itemsToShow: 1.5,
          },
          320: {
            itemsToShow: 1.5,
          },
        }
      },
      trendMovies: []
    }
  },
}
</script>

<style lang="scss">
.hooper {
  height: 230px;

  &-slide {
    padding-right: 40px;
  }
}

@media screen and (max-width: 1200px){
  .hooper {
     &-slide {
       padding-right: 16px;
     }
   }
}

@media screen and (max-width: 768px){
  .hooper {
     height: 140px;

     &-slide {
       padding-right: 16px;
     }
   }
}
</style>
