<template>
  <div>
    <div>
      <p>Start work: </p>
      <UIKitInputMask :placeholder="'hh:mm'" />
    </div>
    <div>
      <p>End work: </p>
      <UIKitInputMask :placeholder="'hh:mm'" />
    </div>
    <UIKitButtonApply> Apply </UIKitButtonApply>
  </div>
</template>

<script>
export default {
  name: 'CounterWidget'
}
</script>

<style>
</style>
