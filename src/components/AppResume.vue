<template>
  <div class="card card-w70">
    <div v-if="isEmpty">
      <app-block
          v-for="item in content"
          :key="item.id"
          v-bind="item.props"
          :type="item.type">
      </app-block>
    </div>
    <h3 v-else>So, Are you ready? please add your first block! Good luck</h3>
  </div>
</template>
<script>
import AppBlock from "@/components/AppBlock"

export default {
  name: "AppResume",
  props: {
    content: {
      type: Array
    }
  },
  data() {
    return {}
  },
  computed: {
    isEmpty() {
      return this.content.length
    }
  },
  components: {AppBlock}
}
</script>

<style scoped>

</style>
