<template>
  <form class="card card-w30" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="type">Type of block</label>
      <select id="type" v-model="selectInput">
        <option :value="{type:'title', prop:'text'}">Title</option>
        <option :value="{type:'subtitle', prop:'text'}">Subtitle</option>
        <option :value="{type:'avatar', prop:'src'}">Avatar</option>
        <option :value="{type:'text', prop:'text'}">Text</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Value</label>
      <textarea id="value" rows="3" v-model="textareaInput"></textarea>
    </div>

    <button :disabled="isActive" class="btn primary">Add</button>
  </form>
</template>

<script>
export default {
  name: "AppForm",
  emits: ['add-block'],
  props: {
    minTextAreaLength: {
      type: Number,
      default: 2
    }
  },
  data() {
    return {
      selectInput: {type: 'title', prop: 'text'},
      textareaInput: ''
    }
  },
  computed: {
    isActive() {
      return this.minTextAreaLength >= this.textareaInput.length
    }
  },
  methods: {
    onSubmit() {
      let props = {}
      props[this.selectInput.prop] = this.textareaInput
      const block = {type: this.selectInput.type, props}
      this.$emit('add-block', block)
      this.textareaInput = ''
      this.selectInput = {type: 'title', prop: 'text'}
    }
  }
}
</script>

<style scoped>

</style>
