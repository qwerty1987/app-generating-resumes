<template>
  <h1 v-text="text"></h1>
</template>

<script>
export default {
  name: "AppTitle",
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
