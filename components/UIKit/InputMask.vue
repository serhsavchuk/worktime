
<template>
  <the-mask v-model="maskInputData" :mask="'##:##'" :masked="true" class="mask" :class="{'error': isError}" ref="inputMask" />
</template>

<script>
export default {
  name: 'InputMask',
  emits: ['input'],
  props: {
    value: {
      type: String,
      default: ''
    },
    isError: {
      type: Boolean,
      default: false
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
    },
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
  .error {
    color: $danger-color;
    border-bottom: 1px solid $danger-color;
  }
</style>
