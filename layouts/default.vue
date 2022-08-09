<template>
  <div class="container">
    <div class="main">
      <Menu/>

      <div class="content">
        <TheInputSearch name="search" v-model="search" placeholder="Search for movies or TV series" class="main-search"/>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import TheInputSearch from "../components/form/The-input-search";
export default {
  name: "default",
  components: {TheInputSearch},
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss">
@import "assets/css/variables.scss";
</style>
