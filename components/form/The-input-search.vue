<template>
  <div class="input-search-wrap">
    <div class="input-search-icon">
      <Icon src="search" width="32" height="32" class="input-search-icon"/>
    </div>
    <input :name="name" :type="type" :value="value" :placeholder="placeholder" @change="onChange($event.target.value)"
           autocomplete="off" class="input input-search"/>
  </div>
</template>

<script>
import Icon from "../Icon";
import {mapMutations} from "vuex";

export default {
  name: 'the-input-search',
  components: {Icon},
  props: {
    type: {type: String, default: 'text'},
    name: {type: String, required: true},
    placeholder: {type: String},
    value: {}
  },
  methods: {
    ...mapMutations(
      {
        startSearch: 'movies/startSearch',
      }
    ),
    onChange(value) {
      this.startSearch(value)
      this.$router.push({path: 'search'})
    }
  }
}
</script>

<style scoped>

</style>
