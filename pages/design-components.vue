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
        <div class="col-3">
          <div class="title-l">Color</div>
        </div>

        <div class="col-9">
          <div class="row">
            <div v-for="item in colors" class="col-4">
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
            <div class="col-4"></div>
            <div class="col-4"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="design-block">
      <div class="row">
        <div class="col-3">
          <div class="title-l">Typography</div>
        </div>
        <div class="col-9">
          <div class="row">
            <div class="col-6">
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

            <div class="col-6">
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
        <div class="col-3">
          <div class="title-l">Interactive Elements</div>
        </div>
        <div class="col-9">
          <div class="design-inputs-wrap">
            <div class="design-input-wrap">
              <div class="row">
                <div class="col-7">
                  <TheInput name="design-example" placeholder="Email address"/>
                </div>
                <div class="col-2 flex align-center">
                  <div class="text-m text-opacity">
                    Input - Empty
                  </div>
                </div>
              </div>
            </div>

            <div class="design-input-wrap">
              <div class="row">
                <div class="col-7">
                  <TheInput v-model="exampleInput" name="design-example" placeholder="Email address"/>
                </div>
                <div class="col-2 flex align-center">
                  <div class="text-m text-opacity">
                    Input - Filled
                  </div>
                </div>
              </div>
            </div>

            <div class="design-input-wrap">
              <div class="row">
                <div class="col-7">
                  <TheInput v-model="exampleInput" rules="required" name="design-example" placeholder="Email address"/>
                </div>
                <div class="col-2 flex align-center">
                  <div class="text-m text-opacity">
                    Input - Active
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
import Icon from "../components/icon";
import TheInput from "../components/form/the-input";

export default {
  name: 'design-components',
  components: {Icon, TheInput},
  data() {
    return {
      exampleInput: 'john@example.com',

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
