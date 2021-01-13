<template>
  <component :is="typeOfBlock"></component>
</template>

<script>
import AppTitle from "@/components/AppTitle"
import AppText from "@/components/AppText"
import AppAvatar from "@/components/AppAvatar"
import AppSubtitle from "@/components/AppSubtitle"

export default {
  name: "AppBlock",
  components: {AppTitle, AppText, AppAvatar, AppSubtitle},
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        const isValidBlock = ['title', 'subtitle', 'avatar', 'text'].includes(value)
        if (isValidBlock) return true
        console.log('You should use correct type of block, please check')
        return false
      }
    }
  },
  computed: {
    typeOfBlock() {
      return `app-${this.type}`
    }
  }
}
</script>

<style scoped>

</style>
