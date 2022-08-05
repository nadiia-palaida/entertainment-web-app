<template>
  <div class="form">
    <div class="form-title title-l">
      {{ title }}
    </div>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(handle)">
        <slot></slot>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: "The-form",
  props: {
    handle: {required: true},
    title: {type: String, default: ''}
  }
}
</script>

<style scoped>

</style>
