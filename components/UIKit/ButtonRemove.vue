<template>
  <button class="btn-remove" @click="$emit('click')" type="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonRemove"
}
</script>

<style lang="scss" scoped>
  .btn-remove {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $danger-color;
    background-color: transparent;
    background-image: none;
    border-color: $danger-color;
    border: 1px solid transparent;
    padding: 5px 10px;
    font-size: 1rem;
    border-radius: .25rem;
  }
  .btn-remove:hover {
    border: 1px solid #dc3545;
    cursor: pointer;
  }
</style>