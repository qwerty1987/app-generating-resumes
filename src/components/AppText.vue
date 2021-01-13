<template>
  <p v-text="text"></p>
</template>

<script>
export default {
  name: "AppText",
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
