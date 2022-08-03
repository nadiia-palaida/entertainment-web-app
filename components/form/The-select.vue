<template>
  <ul class="list-options">
    <li v-for="item in options" class="option-item">
      <button @click="select(item.value)" class="circle-button option-label" :class="{active: item.value === value}">
        {{ item.label }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "the-select",
  props: {
    value: {},
    options: {type: Array}
  },
  data() {
    return {}
  },
  methods: {
    select(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>

</style>
