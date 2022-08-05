<template>
  <div class="container">
    <div class="title-top-wrap">
      <div class="page-top-title">
        <Icon width="32" height="26" src="movie" class="title-icon-movie"/>

        <div class="title-m title-top">Design System</div>
      </div>
    </div>

    <div class="design-block">
      <div class="row">
        <div class="col-sm-12 col-xl-3 col-lg-3 col-md-3">
          <div class="title-l design-block-title">Color</div>
        </div>

        <div class="col-sm-12 col-xl-9 col-lg-9 col-md-9">
          <div class="row">
            <div v-for="item in colors" class="col-sm-6 col-xl-4 col-lg-4 col-md-4">
              <div class="design-color-block">
                <div class="design-color" :style="`background: #${item.name}`"></div>

                <div class="design-color-name title-xs">
                  <span>#</span>
                  {{ item.name }}
                </div>

                <div class="design-color-rgb design-color-item text-m">
                  <span class="design-color-label text-opacity">RGB</span>
                  <span class="design-color-value">{{ item.rgb }}</span>
                </div>

                <div class="design-color-hsl design-color-item text-m">
                  <span class="design-color-label text-opacity">HSL</span>
                  <span class="design-color-value">{{ item.hsl }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="design-block">
      <div class="row">
        <div class="col-sm-12 col-xl-3 col-lg-3 col-md-3">
          <div class="title-l design-block-title">Typography</div>
        </div>
        <div class="col-sm-12 col-xl-9 col-lg-9 col-md-9">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="design-typography-item">
                <div class="design-typography-text-title text-m text-opacity"> Heading (L) - Outfit Light - 32px</div>
                <div class="design-typography-text title-l"> Lorem ipsum dolor sit amet</div>
              </div>

              <div class="design-typography-item">
                <div class="design-typography-text-title text-m text-opacity"> Heading (M) - Outfit Light - 24px</div>
                <div class="design-typography-text title-m">Consectetuer adipiscing elit</div>
              </div>

              <div class="design-typography-item">
                <div class="design-typography-text-title text-m text-opacity"> Heading (S) - Outfit Medium - 24px</div>
                <div class="design-typography-text title-s">Donec odio quisque volutpat mattis eros</div>
              </div>

              <div class="design-typography-item">
                <div class="design-typography-text-title text-m text-opacity"> Heading (XS) - Outfit Medium - 18px</div>
                <div class="design-typography-text title-xs">Nullam malesuada erat ut turpis</div>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="design-typography-item design-typography-item-text">
                <div class="design-typography-text-title text-m text-opacity"> Body (M) - Outfit Light - 15px</div>
                <div class="design-typography-text text-m"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
                  mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                  blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                </div>
              </div>

              <div class="design-typography-item">
                <div class="design-typography-text-title text-m text-opacity"> Body (S) - Outfit Light - 13px</div>
                <div class="design-typography-text text-s"> Sed pretium, ligula sollicitudin laoreet viverra, tortor
                  libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="design-block">
      <div class="row">
        <div class="col-sm-12 col-xl-3 col-lg-3 col-md-3">
          <div class="title-l design-block-title">Interactive Elements</div>
        </div>

        <div class="col-sm-12 col-xl-9 col-lg-9 col-md-9">
          <div class="design-search-inputs">
            <div class="design-search-input">
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                  <TheInputSearch name="search" placeholder="Search for movies or TV series"/>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="text-m text-opacity design-input-label">
                    Search - Empty
                  </div>
                </div>
              </div>
            </div>

            <div class="design-search-input">
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                  <TheInputSearch v-model="search" name="search" placeholder="Search for movies or TV series"
                                  class="focus"/>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="text-m text-opacity design-input-label">
                    Search - Active
                  </div>
                </div>
              </div>
            </div>

            <div class="design-search-input">
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12">
                  <TheInputSearch v-model="search" name="search" placeholder="Search for movies or TV series"/>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="text-m text-opacity design-input-label">
                    Search - Filled
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="design-inputs-wrap">
            <div class="design-input-wrap">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-8 col-sm-12">
                  <TheInput name="design-example" placeholder="Email address"/>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 offset-xl-4 offset-lg-4 offset-md-0 offset-sm-0 flex align-center">
                  <div class="text-m text-opacity design-input-label">
                    Input - Empty
                  </div>
                </div>
              </div>
            </div>

            <div class="design-input-wrap">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-8 col-sm-12">
                  <TheInput v-model="exampleInput" name="design-example" placeholder="Email address"/>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 offset-xl-4 offset-lg-4 offset-md-0 offset-sm-0 flex align-center">
                  <div class="text-m text-opacity design-input-label">
                    Input - Filled
                  </div>
                </div>
              </div>
            </div>

            <div class="design-input-wrap">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-8 col-sm-12">
                  <TheInput v-model="exampleInput" rules="required" name="design-example" placeholder="Email address"/>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 offset-xl-4 offset-lg-4 offset-md-0 offset-sm-0 flex align-center">
                  <div class="text-m text-opacity design-input-label">
                    Input - Active
                  </div>
                </div>
              </div>
            </div>

            <div class="design-input-wrap">
              <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-8 col-sm-12">
                  <TheInput v-model="errorInput" rules="required" name="error input" placeholder="Email address"/>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 offset-xl-4 offset-lg-4 offset-md-0 offset-sm-0 flex align-center">
                  <div class="text-m text-opacity design-input-label">
                    Input - Error
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="design-buttons-wrap">
            <div class="design-btn">
              <div class="row align-center">
                <div class="col-xl-4 col-lg-4 col-md-8 col-sm-8">
                  <button class="btn">
                    Login to your account
                  </button>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-0 offset-sm-0 al">
                  <div class="text-m text-opacity design-button-label">Button - Idle</div>
                </div>
              </div>
            </div>

            <div class="design-btn">
              <div class="row align-center">
                <div class="col-xl-4 col-lg-4 col-md-8 col-sm-8">
                  <button class="btn hover">
                    Login to your account
                  </button>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 offset-xl-4 offset-lg-4 offset-md-0 offset-sm-0 al">
                  <div class="text-m text-opacity design-button-label">Button - hover</div>
                </div>
              </div>
            </div>
          </div>

          <div class="design-films-wrap">
            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div class="movie-wrap">
                  <div class="movie">
                    <img src="~/assets/img/movies/movie1.jpg" class="movie-img" alt="movie">

                    <button class="bookmark">
                      <span class="bookmark-bg"></span>
                      <Icon src="bookmark" width="12" height="14" color="#fff" class="bookmark-icon"/>
                    </button>
                  </div>

                  <div class="movie-title text-m text-opacity">
                    Bookmark Icon - Idle
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div class="movie-wrap">
                  <div class="movie">
                    <img src="~/assets/img/movies/movie1.jpg" class="movie-img" alt="movie">

                    <button class="bookmark hover">
                      <span class="bookmark-bg"></span>
                      <Icon src="bookmark" width="12" height="14" color="#fff" class="bookmark-icon"/>
                    </button>
                  </div>

                  <div class="movie-title text-m text-opacity">
                    Bookmark Icon - Hover
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div class="movie-wrap">
                  <div class="movie">
                    <img src="~/assets/img/movies/movie1.jpg" class="movie-img" alt="movie">

                    <button class="bookmark active">
                      <span class="bookmark-bg"></span>
                      <Icon src="bookmark-fill" width="12" height="14" color="#fff" class="bookmark-icon"/>
                    </button>
                  </div>

                  <div class="movie-title text-m text-opacity">
                    Bookmark Icon - Active
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div class="movie-wrap">
                  <div class="movie">
                    <img src="~/assets/img/movies/movie2.jpg" class="movie-img" alt="movie">

                    <div class="movie-play">
                      <button class="movie-play-btn">
                        <Icon src="play" width="30" height="30" class="movie-play-icon"/>
                        <span class="movie-play-btn-name">Play</span>
                      </button>
                    </div>
                  </div>

                  <div class="movie-title text-m text-opacity">
                    Bookmark Icon - Idle
                  </div>
                </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                <div class="movie-wrap">
                  <div class="movie hover">
                    <img src="~/assets/img/movies/movie2.jpg" class="movie-img" alt="movie">

                    <div class="movie-play">
                      <button class="movie-play-btn">
                        <Icon src="play" width="30" height="30" class="movie-play-icon"/>
                        <span class="movie-play-btn-name">Play</span>
                      </button>
                    </div>
                  </div>

                  <div class="movie-title text-m text-opacity">
                    Bookmark Icon - Hover
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Icon from "../components/Icon";
import TheInput from "../components/form/The-input";
import TheInputSearch from "../components/form/The-input-search";

export default {
  name: 'design-components',
  components: {TheInputSearch, Icon, TheInput},
  data() {
    return {
      exampleInput: 'john@example.com',
      errorInput: '',
      search: 'Beyond Earth',

      colors: [
        {
          name: 'FC4747',
          rgb: '252, 71, 71',
          hsl: '0°, 97%, 63%'
        },
        {
          name: '10141E',
          rgb: '16, 20, 30',
          hsl: '223°, 30%, 9%'
        },
        {
          name: '5A698F',
          rgb: '90, 105, 143',
          hsl: '223°, 23%, 46%'
        },
        {
          name: '161D2F',
          rgb: '22, 29, 47',
          hsl: '223°, 36%, 14%'
        },
        {
          name: 'FFFFFF',
          rgb: '255, 255, 255',
          hsl: '0°, 0%, 100%'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
