<template>
  <div class="input-search-wrap">
    <div class="input-search-icon">
      <Icon src="search" width="32" height="32" class="input-search-icon"/>
    </div>
    <input :name="name" :type="type" :value="value" :placeholder="placeholder" @input="onInput($event.target.value)"
           autocomplete="off" class="input input-search"/>
  </div>
</template>

<script>
import Icon from "../Icon";
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
    onInput(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>

</style>
