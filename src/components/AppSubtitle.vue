<template>
  <h2 v-text="text"></h2>
</template>

<script>
export default {
  name: "AppSubtitle",
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
