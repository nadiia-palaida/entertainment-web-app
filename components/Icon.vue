<template>
  <svg class="icon" :style="`color: ${color}`" :width="width" :height="height">
    <use :xlink:href="`${srcDir}#icon-${src}`"></use>
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props: {
    src: {type: String, required: true},
    color: {type: String},
    width: {type: String, default: '20px'},
    height: {type: String, default: '20px'}
  },
  computed: {
    srcDir() {
      return require('~/assets/img/svg/sprite.svg')
    }
  }
}
</script>

<style scoped>
 .icon {
   display: inline-block;
 }
</style>
