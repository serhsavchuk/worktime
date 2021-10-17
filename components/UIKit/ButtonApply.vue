<template>
  <button class="btn-primary" type="button" @click="$emit('click')" :disabled="disabled" :class="{'disabled':disabled}">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonApply',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style lang="scss" scoped>
  .btn-primary {
    @include btn;
    color: $light-color;
    background-color: $success-color;
    font-size: 16px;
  }
  .btn-primary:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  .btn-primary:active {
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }
  .disabled {
    pointer-events: none;
    opacity: 0.5;
  }
</style>
