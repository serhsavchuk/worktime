<template>
  <button class="btn-primary" type="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonApply'
}
</script>

<style lang="scss" scoped>
  .btn-primary {
    @include btn;
    color: $light-color;
    background-color: $primary-color;
  }
</style>
