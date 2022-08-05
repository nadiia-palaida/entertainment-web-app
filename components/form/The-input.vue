<template>
  <div class="input-wrap">
    <client-only>
      <ValidationProvider :rules="rules" v-slot="{ errors }">
        <div class="input-wrapper">
          <label>
            <span v-if="label" class="input-lapel-text">{{ label }}</span>
            <input :name="name" :type="type" :value="value" :placeholder="placeholder"
                   @input="onInput($event.target.value)"
                   class="input text-m" :class="{error: errors.length}"/>
          </label>
          <span v-if="errors.length" class="input-errors">{{ errors[0] }}</span>
        </div>
      </ValidationProvider>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'the-input',
  props: {
    type: {type: String, default: 'text'},
    label: {type: String},
    name: {type: String, required: true},
    placeholder: {type: String},
    rules: {},
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
