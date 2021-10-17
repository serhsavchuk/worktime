
<template>
  <the-mask v-model="maskInputData" :mask="'##:##'" :masked="true" class="mask" />
</template>

<script>
/* eslint-disable no-console */
export default {
  name: 'InputMask',
  emits: ['input'],
  props: {
    value: {
      type: String,
      default: ''
    },
  },
  computed: {
    maskInputData: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .mask {
    @include input;
    text-align: center;
  }
  .mask:focus {
    outline: none;
    box-shadow: none;
  }
</style>
