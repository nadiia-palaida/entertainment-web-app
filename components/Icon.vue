<template>
  <svg class="icon" :style="`color: ${color}`">
    <use :xlink:href="`${srcDir}#icon-${src}`"></use>
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props: {
    src: {type: String, required: true},
    color: {type: String, default: '#000'}
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
