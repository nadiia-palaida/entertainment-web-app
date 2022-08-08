<template>
  <div class="trending-wrap">
    <div class="trending-title title-l">
      Trending
    </div>
    <div>
      <Hooper :settings="hooperSettings">
        <slide v-for="(item, index) in movieTrends">
          <div>
            <TrendingCard :movie="item"/>
          </div>
        </slide>
      </Hooper>
    </div>

  </div>
</template>

<script>
import Menu from "../components/Menu";
import TrendingCard from "../components/TrendingCard";
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'IndexPage',
  components: {TrendingCard, Menu, Hooper, Slide},
  data() {
    return {
      movieTrends: [
        {
          name: 'Beyond Earth',
          img: require('../assets/img/movies/trends/movie1.jpg'),
          year: '2019',
          type: 'Movie',
          category: 'pg'
        },
        {
          name: 'Bottom Gear',
          img: require('../assets/img/movies/trends/movie2.jpg'),
          year: '2021',
          type: 'Movie',
          category: 'pg'
        },
        {
          name: 'Undiscovered Cities',
          img: require('../assets/img/movies/trends/movie3.jpg'),
          year: '2019',
          type: 'TV Series',
          category: 'e'
        },
        {
          name: '1998',
          img: require('../assets/img/movies/trends/movie4.jpg'),
          year: '2021',
          type: 'Movie',
          category: '18+'
        },
        {
          name: 'Dark Side Of The Moon',
          img: require('../assets/img/movies/trends/movie5.jpg'),
          year: '2018',
          type: 'TV Series',
          category: 'pg'
        },
      ],
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
      }
    }
  }
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
