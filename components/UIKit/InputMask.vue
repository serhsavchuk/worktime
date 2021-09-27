<template>
  <the-mask :mask="'hH:mM'" :tokens="maskTokens" />
</template>

<script>
export default {
  name: "InputMask",
  data() {
    return {
      maskTokens: {
        h: { pattern: /[0-2]/ },
        H: { pattern: /[0-3]/ },
        m: { pattern: /[0-5]/ },
        M: { pattern: /[1-9]/ },
      }
    }
  },
}
</script>

<style>

</style>